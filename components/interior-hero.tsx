import Link from 'next/link'

type InteriorHeroProps = {
  eyebrow: string
  title: string
  description?: string
}

export default function InteriorHero({
  eyebrow,
  title,
  description,
}: InteriorHeroProps) {
  return (
    <header className='bg-forest text-white'>
      <div className='site-container py-16 md:py-20 lg:py-24'>
        <nav className='flex items-center gap-2 text-xs font-semibold text-white/60' aria-label='Breadcrumb'>
          <Link href='/' className='hover:text-white'>Home</Link>
          <span aria-hidden='true'>/</span>
          <span className='text-white/90'>{eyebrow}</span>
        </nav>
        <div className='mt-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end'>
          <div>
            <p className='text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-300'>{eyebrow}</p>
            <h1 className='mt-5 max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-6xl'>
              {title}
            </h1>
          </div>
          {description && (
            <p className='max-w-xl text-lg leading-8 text-white/75 lg:justify-self-end'>
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
