import 'server-only'

import fs from 'node:fs'
import path from 'node:path'
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
  [key: string]: unknown
}

export type ContentResponse = {
  documents: ContentDocument[]
  total: number
}

const contentRoot = path.join(process.cwd(), 'content')

function readCollection(collection: string): ContentDocument[] {
  const directory = path.join(contentRoot, collection)

  if (!fs.existsSync(directory)) return []

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.mdx'))
    .sort()
    .map((file) => {
      const source = fs.readFileSync(path.join(directory, file), 'utf8')
      const { data, content } = matter(source)

      return {
        ...data,
        $id: String(data.id ?? path.basename(file, '.mdx')),
        $createdAt: String(data.createdAt ?? '2024-01-01T00:00:00.000Z'),
        content: content.trim(),
      } as ContentDocument
    })
}

function response(documents: ContentDocument[]): ContentResponse {
  return { documents, total: documents.length }
}

function getAll(collection: string) {
  return Promise.resolve(response(readCollection(collection)))
}

function getBySlug(collection: string, slug: string) {
  return Promise.resolve(
    response(readCollection(collection).filter((document) => document.slug === slug))
  )
}

export const getPage = (slug: string) => getBySlug('pages', slug)
export const getShorts = (slug: string) => getBySlug('shorts', slug)
export const getCoreValues = () => getAll('core-values')
export const getDonors = () => getAll('donors')
export const getAddress = () => getAll('addresses')
export const getThematicAreas = () => getAll('thematic-areas')
export const getThematicAreasBySlug = (slug: string) =>
  getBySlug('thematic-areas', slug)
export const getProjects = () => getAll('projects')
export const getProjectsBySlug = (slug: string) => getBySlug('projects', slug)
export const getKeyAchievements = () => getAll('key-achievements')
export const getKeyAchievementsBySlug = (slug: string) =>
  getBySlug('key-achievements', slug)
export const getNews = () => getAll('news')
export const getNewsBySlug = (slug: string) => getBySlug('news', slug)
