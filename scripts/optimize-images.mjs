// Generates responsive WebP variants of the source PNG photography so the
// browser never has to download the full 2-3MB originals. Runs automatically
// before `next build`/`next dev` (see package.json), is fully non-destructive
// (originals are untouched) and idempotent (skips already-fresh output).
//
// Output: public/optimized/<name>-<width>.webp (git-ignored, regenerated at build time)

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const publicDir = path.join(root, 'public')
const imagesDir = path.join(publicDir, 'images')
const outDir = path.join(publicDir, 'optimized')

// width -> quality: smaller widths can use a slightly lower quality without
// visible loss because they're viewed at higher effective pixel density.
const WIDTHS = [480, 800, 1200, 1600]
const qualityFor = (width) => (width <= 480 ? 70 : width <= 800 ? 74 : 78)

const SOURCES = ['hero-building.png', 'about-exterior.png', 'about-handshake.png', 'about-interior.png']

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
    const out = path.join(outDir, `${base}-${width}.webp`)
    if (await isUpToDate(src, out)) continue
    await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: qualityFor(width) })
      .toFile(out)
    generated++
  }

  // Always keep one variant at (or below) the source's native width so the
  // <img> fallback and largest srcset entry never exceed the original size.
  const maxWidth = Math.min(metadata.width ?? 1600, 1600)
  if (!WIDTHS.includes(maxWidth)) {
    const out = path.join(outDir, `${base}-${maxWidth}.webp`)
    if (!(await isUpToDate(src, out))) {
      await sharp(src).webp({ quality: 78 }).toFile(out)
      generated++
    }
  }

  return generated
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

  console.log(
    `[optimize-images] ${SOURCES.length} source images checked, ${generated} WebP variants (re)generated` +
      (missing ? `, ${missing} MISSING` : '')
  )
}

main().catch((err) => {
  console.error('[optimize-images] failed:', err)
  process.exit(1)
})
