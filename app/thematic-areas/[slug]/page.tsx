import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentDetailPage from '@/components/content-detail-page'
import { getCollectionSlugs, getThematicAreasBySlug } from '@/lib/content'

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return getCollectionSlugs('thematic-areas').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { documents } = await getThematicAreasBySlug(params.slug)
  const document = documents[0]
  if (!document) return { title: 'Thematic area not found' }

  return {
    title: document.title,
    description: document.excerpt,
    openGraph: document.image ? { images: [document.image] } : undefined,
  }
}

export default async function Page({ params }: PageProps) {
  const { documents } = await getThematicAreasBySlug(params.slug)
  const document = documents[0]
  if (!document) notFound()

  return (
    <ContentDetailPage
      document={document}
      image={document.coverImage || document.image}
      eyebrow='Thematic area'
      parentHref='/thematic-areas'
      parentLabel='What we do'
      heroTone='forest'
      showDate={false}
    />
  )
}
