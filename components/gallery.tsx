'use client'

import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import type { GalleryDocument } from '@/lib/content'

type GalleryProps = {
  items: GalleryDocument[]
}

export default function Gallery({ items }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(items.map((item) => item.category)))],
    [items]
  )
  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory)
  const selectedIndex = filteredItems.findIndex(
    (item) => item.$id === selectedId
  )
  const selected = selectedIndex >= 0 ? filteredItems[selectedIndex] : null

  const move = (direction: number) => {
    if (!filteredItems.length || selectedIndex < 0) return
    const next =
      (selectedIndex + direction + filteredItems.length) % filteredItems.length
    setSelectedId(filteredItems[next].$id)
  }

  useEffect(() => {
    if (!selected) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedId(null)
      if (event.key === 'ArrowLeft') move(-1)
      if (event.key === 'ArrowRight') move(1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  })

  return (
    <section className='bg-[#f7f5ef] py-16 md:py-24' aria-labelledby='gallery-heading'>
      <div className='site-container'>
        <div className='grid gap-8 border-b border-slate-300 pb-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end'>
          <div>
            <p className='text-xs font-extrabold uppercase tracking-[0.18em] text-brand'>
              From the field
            </p>
            <h2 id='gallery-heading' className='mt-4 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 md:text-4xl'>
              Our work, documented
            </h2>
          </div>
          <div className='flex flex-wrap gap-x-7 gap-y-3 lg:justify-end' aria-label='Filter gallery'>
            {categories.map((category) => (
              <button
                key={category}
                type='button'
                onClick={() => {
                  setActiveCategory(category)
                  setSelectedId(null)
                }}
                className={`border-b-2 pb-2 text-sm font-bold transition-colors ${
                  activeCategory === category
                    ? 'border-brand text-brand'
                    : 'border-transparent text-slate-500 hover:border-slate-400 hover:text-slate-900'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className='mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredItems.map((item, index) => {
            const featured = index === 0 || index % 7 === 0
            return (
              <article
                key={item.$id}
                className={featured ? 'sm:col-span-2' : ''}
              >
                <button
                  type='button'
                  onClick={() => setSelectedId(item.$id)}
                  className={`group relative block w-full overflow-hidden bg-slate-200 text-left ${
                    featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                  aria-label={`Open photograph: ${item.title}`}
                >
                  <BlurImage
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={featured ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
                    className='object-cover group-hover:scale-[1.025]'
                  />
                  <span className='absolute bottom-4 right-4 grid h-10 w-10 place-items-center bg-white text-xl font-light text-forest shadow-sm transition-transform group-hover:scale-105' aria-hidden='true'>
                    +
                  </span>
                </button>
                <div className='mt-5 border-t border-slate-300 pt-4'>
                  <p className='text-xs font-extrabold uppercase tracking-[0.15em] text-brand'>
                    {item.category}
                  </p>
                  <h3 className='mt-2 text-xl font-extrabold leading-snug tracking-[-0.02em] text-slate-950'>
                    {item.title}
                  </h3>
                  <p className='mt-2 flex items-center gap-2 text-sm text-slate-500'>
                    <MapPin className='h-4 w-4 text-brand' aria-hidden='true' />
                    {item.location} · {item.year}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {selected && (
        <div
          className='fixed inset-0 z-[100] grid bg-[#102a22] p-4 text-white md:p-8'
          role='dialog'
          aria-modal='true'
          aria-label={selected.title}
        >
          <button
            type='button'
            onClick={() => setSelectedId(null)}
            className='absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-white/30 bg-[#102a22] hover:bg-white hover:text-forest md:right-8 md:top-8'
            aria-label='Close gallery'
          >
            <X aria-hidden='true' />
          </button>
          <div className='mx-auto grid h-full w-full max-w-7xl items-center gap-5 pt-12 md:grid-cols-[1fr_260px] md:pt-0'>
            <div className='relative h-[54vh] w-full md:h-[78vh]'>
              <BlurImage
                src={selected.image}
                alt={selected.alt}
                fill
                sizes='(min-width: 768px) 80vw, 100vw'
                className='object-contain'
              />
              {filteredItems.length > 1 && (
                <>
                  <button type='button' onClick={() => move(-1)} className='absolute left-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-white text-forest hover:bg-emerald-100' aria-label='Previous photograph'>
                    <ChevronLeft aria-hidden='true' />
                  </button>
                  <button type='button' onClick={() => move(1)} className='absolute right-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-white text-forest hover:bg-emerald-100' aria-label='Next photograph'>
                    <ChevronRight aria-hidden='true' />
                  </button>
                </>
              )}
            </div>
            <div className='border-t border-white/25 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0'>
              <p className='text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300'>
                {selected.category}
              </p>
              <h2 className='mt-4 text-2xl font-extrabold leading-tight'>
                {selected.title}
              </h2>
              <p className='mt-4 text-sm leading-6 text-white/65'>
                {selected.location} · {selected.year}
              </p>
              <p className='mt-6 text-xs font-semibold text-white/45'>
                {selectedIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
