import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import { Button } from '@/components/ui/button'
import { headlineImpactMetrics } from '@/lib/impact-data'

export default function HeroSection() {
  return (
    <>
      <section
        className='relative isolate min-h-[620px] overflow-hidden bg-slate-950 text-white lg:min-h-[680px]'
        id='home'
      >
        <BlurImage
          src='/images/Humanitarian.JPEG'
          alt='CeRID staff supporting community members in Somalia'
          className='object-cover object-center'
          priority
          fill
          quality={90}
        />
        <div className='absolute inset-0 bg-slate-950/45' />

        <div className='site-container relative grid min-h-[620px] items-center gap-12 py-20 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.75fr] xl:gap-20'>
          <div className='max-w-[680px]'>
            <p className='eyebrow text-emerald-300'>
              Locally led. Evidence informed.
            </p>
            <h1 className='mt-5 text-5xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl'>
              Stronger communities, Lasting change.
            </h1>
            <p className='mt-7 max-w-[590px] text-lg leading-8 text-white/85 sm:text-xl'>
              CeRID works alongside communities across Somalia to deliver
              life-saving support and build resilient, self-reliant futures.
            </p>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Button
                asChild
                size='lg'
                className='h-[52px] rounded-sm bg-brand px-7 text-base font-bold hover:bg-emerald-700'
              >
                <Link href='/impact'>
                  Explore our results <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='h-[52px] rounded-sm border-white bg-transparent px-7 text-base font-bold text-white hover:bg-white hover:text-slate-950'
              >
                <Link href='/#contact-us'>Partner with us</Link>
              </Button>
            </div>
          </div>

          <div className='relative hidden h-[340px] overflow-hidden lg:block xl:h-[400px] rounded-3xl'>
            <BlurImage
              src='/images/Participants_Dissicusion_on_Training_cbos.JPG'
              alt='Community participants taking part in a CeRID programme discussion'
              className='object-cover'
              fill
              priority
              sizes='(min-width: 1280px) 480px, 38vw'
              quality={90}
            />
          </div>
        </div>
      </section>

      <section
        className='border-b border-slate-200 bg-warm-white'
        aria-labelledby='headline-results'
      >
        <h2 id='headline-results' className='sr-only'>
          Reported programme results
        </h2>
        <div className='site-container grid divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0'>
          {headlineImpactMetrics.map((metric) => (
            <div key={metric.value} className='px-6 py-8 sm:py-10 lg:px-9'>
              <strong className='block text-3xl font-extrabold tracking-tight text-brand lg:text-4xl'>
                {metric.value}
              </strong>
              <span className='mt-2 block max-w-[260px] text-sm font-medium leading-6 text-slate-600'>
                {metric.label}
              </span>
            </div>
          ))}
        </div>
        <div className='site-container border-t border-slate-200 py-4'>
          <p className='text-xs leading-5 text-slate-500'>
            Cumulative organisational figures supplied by CeRID. The programme
            investment breakdown is provided on the Impact page.
          </p>
        </div>
      </section>
    </>
  )
}
