import type { Metadata } from 'next'
import InteriorHero from '@/components/interior-hero'
import Gallery from '@/components/gallery'
import Footer from '@/components/footer-contact'
import { getGallery } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Gallery | CeRID',
  description:
    'Stories in pictures from CeRID programmes and community-led action across Somalia.',
}

export default async function GalleryPage() {
  const { documents } = await getGallery()

  return (
    <main>
      <InteriorHero
        eyebrow='Gallery'
        title='Stories in pictures'
        description='A visual record of the people, partnerships, and practical action behind our work across Somalia.'
      />
      <Gallery items={documents} />
      <Footer />
    </main>
  )
}
