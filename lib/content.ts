import 'server-only'

import fs from 'node:fs'
import path from 'node:path'
import { cache } from 'react'
import matter from 'gray-matter'

export type ContentDocument = {
  $id: string
  $createdAt: string
  title?: string
  slug?: string
  excerpt?: string
  content: string
  image?: string
  coverImage?: string
  logo?: string
  office?: string
  email?: string
  mobile?: string
  address?: string
  city?: string
  category?: string
  location?: string
  year?: string
  alt?: string
  status?: string
  start_date?: string
  end_date?: string
  locations?: string[]
  funding_partner?: string
  member_organization?: string
  partner_program?: string
  project_code?: string
  featured?: boolean
  galleryImages?: string[]
  galleryAlts?: string[]
  highlights?: Array<{ value: string; label: string }>
  program_areas?: string[]
  metric_value?: string
  metric_label?: string
  reporting_period?: string
  source?: string
  evidence_status?: string
  lastReviewed?: string
  order?: number
  [key: string]: unknown
}

export type ContentResponse<T extends ContentDocument = ContentDocument> = {
  documents: T[]
  total: number
}

export type CardDocument = ContentDocument & {
  title: string
  slug: string
}

const contentRoot = path.join(process.cwd(), 'content')
const usesRemoteImages = Boolean(process.env.NEXT_PUBLIC_R2_PUBLIC_URL)
const slugCollections = new Set([
  'pages',
  'shorts',
  'thematic-areas',
  'projects',
  'key-achievements',
  'news',
])

function validateDocument(collection: string, file: string, document: ContentDocument) {
  const label = `content/${collection}/${file}`

  if (!document.$id) throw new Error(`${label} is missing an id`)
  if (Number.isNaN(Date.parse(document.$createdAt))) {
    throw new Error(`${label} has an invalid createdAt date`)
  }
  if (slugCollections.has(collection) && (!document.title || !document.slug)) {
    throw new Error(`${label} must include title and slug`)
  }
  if (
    collection === 'gallery' &&
    (!document.title ||
      !document.category ||
      !document.image ||
      !document.alt ||
      !document.location ||
      !document.year)
  ) {
    throw new Error(
      `${label} must include title, category, image, alt, location, and year`
    )
  }

  for (const field of ['image', 'coverImage', 'logo'] as const) {
    const asset = document[field]
    if (!asset?.startsWith('/')) continue
    if (usesRemoteImages && asset.startsWith('/images/')) continue

    const assetPath = path.join(process.cwd(), 'public', asset)
    if (!fs.existsSync(assetPath)) {
      throw new Error(`${label} references missing ${field}: ${asset}`)
    }
  }

  for (const asset of document.galleryImages ?? []) {
    if (!asset.startsWith('/')) continue
    if (usesRemoteImages && asset.startsWith('/images/')) continue
    const assetPath = path.join(process.cwd(), 'public', asset)
    if (!fs.existsSync(assetPath)) {
      throw new Error(`${label} references missing gallery image: ${asset}`)
    }
  }
}

const readCollection = cache((collection: string): ContentDocument[] => {
  const directory = path.join(contentRoot, collection)

  if (!fs.existsSync(directory)) return []

  const documents = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(directory, file), 'utf8')
      const { data, content } = matter(source)

      const document = {
        ...data,
        $id: String(data.id ?? path.basename(file, '.mdx')),
        $createdAt: String(data.createdAt ?? '2024-01-01T00:00:00.000Z'),
        order: Number(data.order ?? Number.MAX_SAFE_INTEGER),
        content: content.trim(),
      } as ContentDocument

      validateDocument(collection, file, document)
      return document
    })

  return documents.sort(
    (left, right) =>
      (left.order ?? Number.MAX_SAFE_INTEGER) -
        (right.order ?? Number.MAX_SAFE_INTEGER) ||
      left.$createdAt.localeCompare(right.$createdAt)
  )
})

function response<T extends ContentDocument>(documents: T[]): ContentResponse<T> {
  return { documents, total: documents.length }
}

function getAll<T extends ContentDocument = ContentDocument>(collection: string) {
  return Promise.resolve(response(readCollection(collection) as T[]))
}

function getBySlug<T extends ContentDocument = ContentDocument>(
  collection: string,
  slug: string
) {
  return Promise.resolve(
    response(
      readCollection(collection).filter(
        (document) => document.slug === slug
      ) as T[]
    )
  )
}

export function getCollectionSlugs(collection: string) {
  return readCollection(collection)
    .map((document) => document.slug)
    .filter((slug): slug is string => Boolean(slug))
}

export const getPage = (slug: string) => getBySlug<CardDocument>('pages', slug)
export const getShorts = (slug: string) => getBySlug<CardDocument>('shorts', slug)
export const getCoreValues = () => getAll('core-values')
export const getDonors = () => getAll('donors')
export const getAddress = () => getAll('addresses')
export const getThematicAreas = () => getAll<CardDocument>('thematic-areas')
export const getThematicAreasBySlug = (slug: string) =>
  getBySlug<CardDocument>('thematic-areas', slug)
export const getProjects = () => getAll<CardDocument>('projects')
export const getProjectsBySlug = (slug: string) =>
  getBySlug<CardDocument>('projects', slug)
export const getKeyAchievements = () =>
  getAll<CardDocument>('key-achievements')
export const getKeyAchievementsBySlug = (slug: string) =>
  getBySlug<CardDocument>('key-achievements', slug)
export const getNews = () => getAll<CardDocument>('news')
export const getNewsBySlug = (slug: string) =>
  getBySlug<CardDocument>('news', slug)
export type GalleryDocument = ContentDocument & {
  title: string
  category: string
  image: string
  alt: string
  location: string
  year: string
}
export const getGallery = () => getAll<GalleryDocument>('gallery')
