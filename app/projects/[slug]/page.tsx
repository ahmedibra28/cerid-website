import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentDetailPage from '@/components/content-detail-page'
import { getCollectionSlugs, getProjectsBySlug } from '@/lib/content'

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return getCollectionSlugs('projects').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { documents } = await getProjectsBySlug(params.slug)
  const document = documents[0]
  if (!document) return { title: 'Project not found' }

  return {
    title: document.title,
    description: document.excerpt,
    openGraph: document.image ? { images: [document.image] } : undefined,
  }
}

export default async function Page({ params }: PageProps) {
  const { documents } = await getProjectsBySlug(params.slug)
  const document = documents[0]
  if (!document) notFound()

  const topAligned = [
    'somalia-multisector-emergency-response',
    'cross-border-community-resilience',
    'building-resilience-and-improving-sustainable-livelihood-skills-of-vulnerable-idphost-women-in-luuq-district',
  ].includes(document.slug)

  return (
    <ContentDetailPage
      document={document}
      image={document.coverImage || document.image}
      imagePosition={topAligned ? 'object-top' : 'object-center'}
    />
  )
}
