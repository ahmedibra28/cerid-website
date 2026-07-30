import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import { getThematicAreas } from '@/lib/content'

export default async function ThematicAreasHome() {
  const { documents } = await getThematicAreas()

  return (
    <section className='section-padding bg-white' id='thematic-areas'>
      <div className='site-container'>
        <div className='grid gap-6 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end'>
          <div>
            <p className='eyebrow'>What we do</p>
            <h2 className='section-title mt-4'>
              Five inter-connected thematic areas.
            </h2>
          </div>
          <div className='lg:justify-self-end'>
            <p className='max-w-xl text-lg leading-8 text-slate-600'>
              Our work connects immediate humanitarian priorities with
              education, livelihoods, climate resilience, and evidence-led
              solutions.
            </p>
            <Link
              href='/thematic-areas'
              className='mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand'
            >
              Explore all thematic areas <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>

        <div className='mt-10 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
          {documents.slice(0, 3).map((area, index) => (
            <article
              key={area.$id}
              className={`group border-t border-slate-300 pt-5 ${
                index < 2 ? 'lg:col-span-1' : ''
              }`}
            >
              <Link href={`/thematic-areas/${area.slug}`} className='block'>
                <div className='relative aspect-[16/10] overflow-hidden bg-slate-100'>
                  <BlurImage
                    src={area.image || '/images/research.webp'}
                    alt={area.title}
                    fill
                    sizes='(min-width: 1024px) 33vw, 50vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-[1.025]'
                  />
                </div>
                <p className='eyebrow mt-6'>
                  Thematic area {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className='mt-3 text-2xl font-extrabold leading-tight tracking-[-0.025em] text-slate-950 group-hover:text-brand'>
                  {area.title}
                </h3>
                <p className='mt-4 line-clamp-3 leading-7 text-slate-600'>
                  {area.excerpt}
                </p>
                <span className='mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand'>
                  Learn more{' '}
                  <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
