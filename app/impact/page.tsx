import type { Metadata } from 'next'
import Footer from '@/components/footer-contact'
import InteriorHero from '@/components/interior-hero'
import ImpactGrid from '@/components/impact-grid'

export const metadata: Metadata = {
  title: 'Impact and Results',
  description:
    'Explore CeRID’s humanitarian, education, climate, protection, and research results across Somalia.',
}

export default function ImpactPage() {
  return (
    <>
      <main>
        <InteriorHero
          eyebrow='Impact and results'
          title='Results built with communities.'
          description='Evidence of what locally led programmes, trusted partnerships, and long-term commitment have achieved across Somalia.'
        />
        <ImpactGrid />
      </main>
      <Footer />
    </>
  )
}
