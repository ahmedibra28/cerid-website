import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentDetailPage from '@/components/content-detail-page'
import {
  getCollectionSlugs,
  getKeyAchievementsBySlug,
} from '@/lib/content'

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return getCollectionSlugs('key-achievements').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { documents } = await getKeyAchievementsBySlug(params.slug)
  const document = documents[0]
  if (!document) return { title: 'Achievement not found' }

  return {
    title: document.title,
    description: document.excerpt,
    openGraph: document.image ? { images: [document.image] } : undefined,
  }
}

export default async function Page({ params }: PageProps) {
  const { documents } = await getKeyAchievementsBySlug(params.slug)
  const document = documents[0]
  if (!document) notFound()

  return (
    <ContentDetailPage
      document={document}
      image={document.coverImage || document.image}
      eyebrow='Our impact'
      parentHref='/#thematic-areas'
      parentLabel='Priority areas'
    />
  )
}
