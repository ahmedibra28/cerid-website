const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL

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
  images: {
    remotePatterns,
  },
}

export default nextConfig
