/** @type {import('next').NextConfig} */
const repoName =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'jonova-immobilienverwaltung'
const useBasePath = process.env.GITHUB_ACTIONS === 'true'
const basePath = useBasePath ? `/${repoName}` : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
