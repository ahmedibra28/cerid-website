import Footer from '@/components/footer-contact'
import InteriorHero from '@/components/interior-hero'
import MissionVision from '@/components/mission-vision'

export default function Page() {
  return (
    <>
      <InteriorHero
        eyebrow='Our direction'
        title='A peaceful, resilient, and self-reliant future.'
        description='Our mission and vision keep our programmes focused on dignity, evidence, local leadership, and lasting community capacity.'
      />
      <main className='section-padding bg-white'>
        <MissionVision />
      </main>
      <Footer />
    </>
  )
}
