import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ImpactResultDetail from '@/components/impact-detail-page'
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
  if (!document) return { title: 'Impact result not found' }

  return {
    title: `${document.title} | Impact and Results`,
    description: document.excerpt,
    openGraph: document.image ? { images: [document.image] } : undefined,
  }
}

export default async function ImpactDetailPage({ params }: PageProps) {
  const { documents } = await getKeyAchievementsBySlug(params.slug)
  const document = documents[0]
  if (!document) notFound()

  return <ImpactResultDetail document={document} />
}
