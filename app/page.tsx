import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import Donors from '@/components/donors'
import Footer from '@/components/footer-contact'
import HeroSection from '@/components/hero-section'
import KeyAchievement from '@/components/key-achievement'
import Projects from '@/components/projects'
import Offices from '@/components/offices'

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className='section-padding bg-white'>
        <div className='site-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
          <div>
            <p className='eyebrow'>About CeRID</p>
            <h2 className='section-title mt-4'>Local leadership. Proven results.</h2>
            <p className='mt-6 text-lg leading-8 text-slate-600'>
              Since 2005, CeRID has combined local knowledge, rigorous research,
              and practical programmes to respond to urgent needs and create
              lasting opportunity across Somalia.
            </p>
            <Link href='/about-us' className='mt-7 inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-sm font-bold text-brand'>
              Learn more about CeRID <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
          <div className='relative aspect-[16/10] overflow-hidden'>
            <BlurImage
              src='/images/Participants_posing_for_a_group_photo_after_the_completion_of_business_skills_and_entrepreneurship_training.jpg'
              alt='Graduates of a CeRID-supported business skills programme'
              className='object-cover'
              fill
            />
          </div>
        </div>
      </section>

      <KeyAchievement />
      <Projects />
      <Donors />
      <Offices />
      <Footer />
    </div>
  )
}
