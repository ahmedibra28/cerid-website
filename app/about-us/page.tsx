import { notFound } from 'next/navigation'
import StandardContentPage from '@/components/standard-content-page'
import { getPage } from '@/lib/content'

export default async function Page() {
  const { documents } = await getPage('about-us')
  const document = documents[0]
  if (!document) notFound()

  return (
    <StandardContentPage
      document={document}
      eyebrow='Who we are'
      description='A Somali organization bringing together research, local leadership, and integrated programmes to create lasting change.'
      image='/images/Participants_posing_for_a_group_photo_after_the_completion_of_business_skills_and_entrepreneurship_training.jpg'
      imageAlt='Graduates of a CeRID-supported skills programme'
    />
  )
}
