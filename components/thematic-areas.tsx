import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import { getThematicAreas } from '@/lib/content'

export default async function ThematicAreas() {
  const { documents } = await getThematicAreas()

  return (
    <section className='site-container' id='thematic-areas'>
      <div className='border-t border-slate-300'>
        {documents.map((item, index) => (
          <article
            key={item.$id}
            className='grid gap-6 border-b border-slate-300 py-8 md:grid-cols-[70px_220px_1fr_auto] md:items-center md:py-10'
          >
            <span className='text-sm font-extrabold text-brand' aria-hidden='true'>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className='relative aspect-[16/10] overflow-hidden bg-slate-100'>
              <BlurImage
                alt={`${item.title} programme work`}
                className='object-cover'
                src={item.image || '/images/research.webp'}
                fill
                sizes='220px'
              />
            </div>
            <div>
              <p className='eyebrow'>Programme pillar</p>
              <h2 className='mt-3 text-2xl font-extrabold tracking-[-0.025em] text-slate-950 md:text-3xl'>
                {item.title}
              </h2>
              <p className='mt-3 max-w-2xl line-clamp-3 leading-7 text-slate-600'>
                {item.excerpt}
              </p>
            </div>
            <Link
              href={`/thematic-areas/${item.slug}`}
              className='inline-flex items-center gap-2 text-sm font-bold text-brand'
              aria-label={`Explore the ${item.title} thematic area`}
            >
              Explore <ArrowRight className='h-4 w-4' aria-hidden='true' />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
