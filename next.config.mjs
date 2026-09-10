const defaultR2PublicUrl =
  'https://pub-a4aefd0f35854e47ad9626646f48be3d.r2.dev/cerid-website'
const r2PublicUrl =
  process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, '') ||
  defaultR2PublicUrl

const remotePatterns = [
  { protocol: 'https', hostname: 'plus.unsplash.com' },
  { protocol: 'https', hostname: 'images.unsplash.com' },
  { protocol: 'https', hostname: 'rrslide.com' },
  { protocol: 'https', hostname: 'www.google.com' },
]

if (r2PublicUrl) {
  const url = new URL(r2PublicUrl)
  remotePatterns.push({
    protocol: url.protocol.replace(':', ''),
    hostname: url.hostname,
    port: url.port,
    pathname: `${url.pathname.replace(/\/$/, '') || ''}/**`,
  })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_R2_PUBLIC_URL: r2PublicUrl,
  },
  images: {
    remotePatterns,
  },
}

export default nextConfig
