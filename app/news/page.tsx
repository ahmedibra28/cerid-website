import Footer from '@/components/footer-contact'
import InteriorHero from '@/components/interior-hero'
import News from '@/components/news'

export default function Page() {
  return (
    <>
      <InteriorHero
        eyebrow='News and stories'
        title='Updates from our work.'
        description='Stories, programme milestones, and perspectives from the communities and partners we work alongside.'
      />
      <main className='section-padding bg-white'>
        <News />
      </main>
      <Footer />
    </>
  )
}
