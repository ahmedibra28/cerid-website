import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentDetailPage from '@/components/content-detail-page'
import { getCollectionSlugs, getNewsBySlug } from '@/lib/content'

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return getCollectionSlugs('news').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = await getNewsBySlug(params.slug)
  const document = item.documents[0]

  if (!document) return { title: 'News not found' }

  return {
    title: document.title,
    description: document.excerpt,
    openGraph: document.image ? { images: [document.image] } : undefined,
  }
}

export default async function Page({ params }: PageProps) {
  const { documents } = await getNewsBySlug(params.slug)
  const document = documents[0]

  if (!document) notFound()

  return (
    <ContentDetailPage
      document={document}
      image={document.coverImage || document.image}
    />
  )
}
