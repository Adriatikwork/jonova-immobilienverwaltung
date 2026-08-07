// Derives the whole favicon / app-icon / navbar-logo set from the single brand
// source, public/images/logo.jpeg.
//
// The source is a full lockup (J monogram above the JONOVA wordmark) on white.
// At favicon sizes the wordmark is unreadable mush, so the monogram is cropped
// out and used on its own for every square icon.
//
// Outputs are committed (not gitignored): browsers and crawlers request
// /favicon.ico and /apple-touch-icon.png at fixed paths, so they must exist in
// the repo rather than only after a build. Re-run with `npm run icons` if the
// logo ever changes.

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const publicDir = path.join(root, 'public')
const source = path.join(publicDir, 'images', 'logo.jpeg')

// Monogram bounds within the 1254x1254 source, measured from the pixel content
// bands (the wordmark starts at y=720). Padded slightly so the glyph breathes.
const MONOGRAM = { left: 470, top: 233, width: 314, height: 468 }

/**
 * The artwork is dark ink on white paper. Treating "distance from white" as
 * coverage gives a clean alpha channel including anti-aliased edges, without
 * needing a vector source.
 *
 * JPEG ringing leaves the "white" paper a few points below 255, which would
 * otherwise render as a faint grey box around the glyph on dark backgrounds,
 * so anything under the floor is discarded and the remainder is rescaled.
 */
const PAPER_FLOOR = 20

function coverageFrom(data, pixels) {
  const alpha = Buffer.alloc(pixels)
  const span = 255 - PAPER_FLOOR
  for (let i = 0; i < pixels; i++) {
    const min = Math.min(data[i * 3], data[i * 3 + 1], data[i * 3 + 2])
    const ink = 255 - min
    if (ink <= PAPER_FLOOR) continue
    alpha[i] = Math.min(255, Math.round(((ink - PAPER_FLOOR) / span) * 255 * 1.45))
  }
  return alpha
}

async function monogramLayers(size) {
  const { data, info } = await sharp(source)
    .extract(MONOGRAM)
    .resize(size, size, { fit: 'contain', background: '#ffffff' })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const pixels = info.width * info.height
  const alpha = coverageFrom(data, pixels)
  const raw = { width: info.width, height: info.height, channels: 1 }

  const colour = await sharp(data, { raw: info })
    .joinChannel(alpha, { raw })
    .png({ compressionLevel: 9 })
    .toBuffer()

  const flat = Buffer.alloc(pixels * 3)
  for (let i = 0; i < pixels; i++) {
    flat[i * 3] = 255
    flat[i * 3 + 1] = 255
    flat[i * 3 + 2] = 255
  }
  const light = await sharp(flat, { raw: info })
    .joinChannel(alpha, { raw })
    .png({ compressionLevel: 9 })
    .toBuffer()

  return { colour, light }
}

/** Square icon on solid white — iOS and Windows tiles render transparency badly. */
async function solidIcon(size, padRatio = 0.14) {
  const inner = Math.round(size * (1 - padRatio * 2))
  const offset = Math.round((size - inner) / 2)
  const { colour } = await monogramLayers(inner)

  return sharp({
    create: { width: size, height: size, channels: 4, background: '#ffffff' },
  })
    .composite([{ input: colour, top: offset, left: offset }])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

/**
 * Android crops maskable icons to as little as the centre 80%, and fills the
 * mask rather than leaving it transparent, so the glyph needs a generous inset
 * on an opaque background.
 */
async function maskableIcon(size = 512) {
  return solidIcon(size, 0.2)
}

/** Minimal multi-resolution ICO with PNG-encoded entries. */
function buildIco(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)

  let offset = 6 + images.length * 16
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size >= 256 ? 0 : size, 0)
    entry.writeUInt8(size >= 256 ? 0 : size, 1)
    entry.writeUInt8(0, 2)
    entry.writeUInt8(0, 3)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(data.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += data.length
    return entry
  })

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)])
}

async function write(name, data) {
  const target = path.join(publicDir, name)
  await fs.writeFile(target, data)
  console.log(`  ${name.padEnd(28)} ${(data.length / 1024).toFixed(1)} KB`)
}

async function main() {
  try {
    await fs.access(source)
  } catch {
    console.error(`[icons] source not found: ${source}`)
    process.exit(1)
  }

  console.log('[icons] generating from public/images/logo.jpeg')

  for (const size of [180, 192, 512]) {
    const name = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`
    await write(name, await solidIcon(size))
  }
  await write('icon-maskable-512.png', await maskableIcon())

  const icoSizes = [16, 32, 48]
  const icoImages = []
  for (const size of icoSizes) {
    icoImages.push({ size, data: await solidIcon(size, 0.08) })
  }
  await write('favicon.ico', buildIco(icoImages))
  await write('favicon-32x32.png', icoImages[1].data)

  // Transparent chrome marks, at 3x the largest on-screen size (40px) so they
  // stay sharp on high-density phones. The colour version needs a light
  // surface; the white version is for the navy hero and footer.
  const { colour, light } = await monogramLayers(120)
  await write('logo-mark.png', colour)
  await write('logo-mark-light.png', light)

  console.log('[icons] done')
}

main().catch((err) => {
  console.error('[icons] failed:', err)
  process.exit(1)
})
