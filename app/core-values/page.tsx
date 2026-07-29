import CoreValues from '@/components/core-values'
import Footer from '@/components/footer-contact'
import InteriorHero from '@/components/interior-hero'

export default function Page() {
  return (
    <>
      <InteriorHero
        eyebrow='How we work'
        title='Values that guide every decision.'
        description='Our values shape how we work with communities, partners, colleagues, and the evidence behind our programmes.'
      />
      <main className='section-padding bg-white'>
        <CoreValues />
      </main>
      <Footer />
    </>
  )
}
