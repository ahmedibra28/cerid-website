import Link from 'next/link'
import Footer from '@/components/footer-contact'
import InteriorHero from '@/components/interior-hero'

export default function Page() {
  return (
    <>
      <InteriorHero
        eyebrow='Careers'
        title='Build change with us.'
        description='Join a locally led team using research, partnership, and practical experience to strengthen communities across Somalia.'
      />
      <main className='section-padding bg-white'>
        <div className='site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20'>
          <div>
            <p className='eyebrow'>Open opportunities</p>
            <h2 className='section-title mt-4'>Work with us.</h2>
          </div>
          <div className='border-y border-slate-300 py-10'>
            <h3 className='text-2xl font-bold text-slate-950'>
              There are no current openings.
            </h3>
            <p className='mt-4 max-w-2xl leading-7 text-slate-600'>
              We regularly recruit programme, research, operations, and
              community engagement professionals. Check back for future
              opportunities.
            </p>
            <Link
              href='/#contact-us'
              className='mt-7 inline-flex border-b-2 border-brand pb-1 text-sm font-bold text-brand'
            >
              Contact our team
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
