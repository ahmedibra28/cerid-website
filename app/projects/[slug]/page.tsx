import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetailPage from '@/components/project-detail-page'
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

  return <ProjectDetailPage document={document} />
}
