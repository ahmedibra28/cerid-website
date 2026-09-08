import Footer from '@/components/footer-contact'
import InteriorHero from '@/components/interior-hero'
import News from '@/components/news'
import SocialUpdates from '@/components/social-updates'

export default function Page() {
  return (
    <>
      <InteriorHero
        eyebrow='News and stories'
        title='Updates from our work.'
        description='Stories, programme milestones, and perspectives from the communities and partners we work alongside.'
      />
      <main className='section-padding bg-white'>
        <div className='site-container grid gap-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-16'>
          <News />
          <SocialUpdates />
        </div>
      </main>
      <Footer />
    </>
  )
}
