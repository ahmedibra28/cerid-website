import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import { getKeyAchievements } from '@/lib/content'

export default async function KeyAchievement() {
  const { documents } = await getKeyAchievements()

  return (
    <section className='section-padding bg-warm-white' id='thematic-areas'>
      <div className='site-container'>
        <div className='grid gap-6 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end'>
          <div>
            <p className='eyebrow'>Our priority areas</p>
            <h2 className='section-title mt-4'>Focused on what creates lasting impact.</h2>
          </div>
          <p className='max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end'>
            We combine life-saving assistance with long-term, community-led
            solutions across education, climate resilience, protection, and research.
          </p>
        </div>

        <div className='mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {documents.slice(0, 3).map((item) => (
            <article key={item.$id} className='group bg-white'>
              <Link href={`/key-achievement/${item.slug}`} className='block overflow-hidden'>
                <div className='relative aspect-[4/3] overflow-hidden'>
                  <BlurImage
                    alt={item.title}
                    className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                    src={item.image || '/images/Humanitarian.JPEG'}
                    fill
                  />
                </div>
                <div className='border border-t-0 border-slate-200 p-7'>
                  <h3 className='text-2xl font-bold leading-tight tracking-tight text-slate-950'>{item.title}</h3>
                  <p className='mt-4 line-clamp-3 leading-7 text-slate-600'>{item.excerpt}</p>
                  <span className='mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand'>
                    Read more <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
