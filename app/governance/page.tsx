import { notFound } from 'next/navigation'
import StandardContentPage from '@/components/standard-content-page'
import { getPage } from '@/lib/content'

export default async function Page() {
  const { documents } = await getPage('governance')
  const document = documents[0]
  if (!document) notFound()

  return (
    <StandardContentPage
      document={document}
      eyebrow='Accountability'
      description='Clear oversight, responsible leadership, and transparent programme management guide every part of our work.'
      image='/images/research.webp'
      imageAlt='CeRID staff and partners working with local communities'
    />
  )
}
