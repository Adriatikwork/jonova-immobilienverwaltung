/** Prefix public asset paths for GitHub Pages project basePath. */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}

/**
 * Builds a `srcSet` string for a photo pre-processed by
 * scripts/optimize-images.mjs (public/optimized/<name>-<width>.webp).
 */
export function optimizedSrcSet(name: string, widths: number[]): string {
  return widths.map((w) => `${assetPath(`/optimized/${name}-${w}.webp`)} ${w}w`).join(', ')
}

/** Largest generated variant, used as the plain `src` fallback. */
export function optimizedFallback(name: string, widths: number[]): string {
  return assetPath(`/optimized/${name}-${Math.max(...widths)}.webp`)
}
