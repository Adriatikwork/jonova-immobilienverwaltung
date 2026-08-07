// Generates responsive WebP (+ AVIF for the LCP hero) variants of the source
// photography so the browser never has to download the full originals.
// Runs automatically before `next build`/`next dev` (see package.json).
//
// Output: public/optimized/<name>-<width>.{webp,avif}

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const publicDir = path.join(root, 'public')
const imagesDir = path.join(publicDir, 'images')
const outDir = path.join(publicDir, 'optimized')

const WIDTHS = [480, 800, 1024]
const qualityFor = (width) => (width <= 480 ? 70 : width <= 800 ? 74 : 78)

const SOURCES = [
  'hero-building.png',
  'about-exterior.png',
  'about-commercial.png',
  'about-interior.png',
]
const AVIF_SOURCES = new Set(['hero-building.png'])

async function isUpToDate(src, out) {
  try {
    const [srcStat, outStat] = await Promise.all([fs.stat(src), fs.stat(out)])
    return outStat.mtimeMs >= srcStat.mtimeMs
  } catch {
    return false
  }
}

async function optimize(file) {
  const src = path.join(imagesDir, file)
  const base = file.replace(/\.png$/i, '')
  const metadata = await sharp(src).metadata()
  let generated = 0

  for (const width of WIDTHS) {
    if (width > (metadata.width ?? width)) continue

    const webpOut = path.join(outDir, `${base}-${width}.webp`)
    if (!(await isUpToDate(src, webpOut))) {
      await sharp(src)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: qualityFor(width) })
        .toFile(webpOut)
      generated++
    }

    if (AVIF_SOURCES.has(file)) {
      const avifOut = path.join(outDir, `${base}-${width}.avif`)
      if (!(await isUpToDate(src, avifOut))) {
        await sharp(src)
          .resize({ width, withoutEnlargement: true })
          .avif({ quality: 48, effort: 5 })
          .toFile(avifOut)
        generated++
      }
    }
  }

  return generated
}

/** Social preview, derived from the hero so the two never drift apart. */
async function buildOgImage() {
  const src = path.join(imagesDir, 'hero-building.png')
  const out = path.join(publicDir, 'og-image.jpg')
  if (await isUpToDate(src, out)) return 0

  await sharp(src)
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out)
  return 1
}

async function main() {
  await fs.mkdir(outDir, { recursive: true })

  let generated = 0
  let missing = 0
  for (const file of SOURCES) {
    try {
      await fs.access(path.join(imagesDir, file))
    } catch {
      console.warn(`[optimize-images] WARNING: ${file} not found in public/images`)
      missing++
      continue
    }
    generated += await optimize(file)
  }

  generated += await buildOgImage()

  console.log(
    `[optimize-images] ${SOURCES.length} source images checked, ${generated} variants (re)generated` +
      (missing ? `, ${missing} MISSING` : '')
  )
}

main().catch((err) => {
  console.error('[optimize-images] failed:', err)
  process.exit(1)
})
