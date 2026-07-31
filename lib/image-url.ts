const publicImageBaseUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, '')

export function resolveImageUrl(src: string) {
  if (!publicImageBaseUrl || !src.startsWith('/images/')) return src
  const objectKey = src.slice('/images/'.length)
  return `${publicImageBaseUrl}/${objectKey}`
}
