import type { MetadataRoute } from 'next'
import { getCollectionSlugs } from '@/lib/content'

const baseUrl = 'https://www.cerid.so'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about-us',
    '/careers',
    '/core-values',
    '/governance',
    '/gallery',
    '/impact',
    '/mission-vision',
    '/news',
    '/projects',
    '/thematic-areas',
  ]

  const contentRoutes = [
    ['projects', '/projects'],
    ['news', '/news'],
    ['key-achievements', '/impact'],
    ['thematic-areas', '/thematic-areas'],
  ].flatMap(([collection, prefix]) =>
    getCollectionSlugs(collection).map((slug) => `${prefix}/${slug}`)
  )

  return [...staticRoutes, ...contentRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
