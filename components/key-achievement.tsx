import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getKeyAchievements } from '@/lib/content'

export default async function KeyAchievement() {
  const { documents } = await getKeyAchievements()
  const results = documents.filter((item) => item.metric_value).slice(0, 3)

  return (
    <section className='section-padding bg-forest text-white' id='impact-areas'>
      <div className='site-container'>
        <div className='grid gap-6 border-b border-white/20 pb-10 lg:grid-cols-2 lg:items-end'>
          <div>
            <p className='eyebrow text-emerald-300'>Our impact</p>
            <h2 className='mt-4 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white md:text-5xl'>
              Results with a record behind them.
            </h2>
          </div>
          <div className='max-w-xl lg:justify-self-end'>
            <p className='text-lg leading-8 text-white/70'>
              Explore reported outcomes, their time period, and the programme
              evidence used to support each figure.
            </p>
            <Link href='/impact' className='mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-300'>
              Explore all impact and results <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>

        <dl className='mt-10 grid border-y border-white/20 md:grid-cols-3'>
          {results.map((item, index) => (
            <div
              key={item.$id}
              className={`py-9 md:px-8 ${index > 0 ? 'border-t border-white/20 md:border-l md:border-t-0' : ''}`}
            >
              <dd className='text-5xl font-extrabold tracking-[-0.045em] text-emerald-300'>
                {item.metric_value}
              </dd>
              <dt className='mt-4 max-w-xs font-bold leading-7 text-white'>
                {item.metric_label}
              </dt>
              <p className='mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-white/50'>
                {item.reporting_period}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
