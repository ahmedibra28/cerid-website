import Footer from '@/components/footer-contact'
import InteriorHero from '@/components/interior-hero'
import ThematicAreas from '@/components/thematic-areas'

export default function Page() {
  return (
    <>
      <InteriorHero
        eyebrow='What we do'
        title='Integrated programmes. Community priorities.'
        description='Our thematic areas connect urgent humanitarian needs with the long-term systems and skills communities need to thrive.'
      />
      <main className='section-padding bg-white'>
        <ThematicAreas />
      </main>
      <Footer />
    </>
  )
}
