import Link from 'next/link'
import { ArrowRight, FileCheck2 } from 'lucide-react'
import { getKeyAchievements } from '@/lib/content'

export default async function ImpactGrid() {
  const { documents } = await getKeyAchievements()
  const metrics = documents.filter(
    (item) => item.metric_value && item.metric_label
  )

  return (
    <section className='section-padding bg-warm-white' aria-labelledby='impact-grid-title'>
      <div className='site-container'>
        <div className='grid gap-8 border-b border-slate-300 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end'>
          <div>
            <p className='eyebrow'>Reported results</p>
            <h2 id='impact-grid-title' className='mt-4 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 md:text-4xl'>
              Evidence, not just activity.
            </h2>
          </div>
          <div className='max-w-2xl lg:justify-self-end'>
            <p className='text-lg leading-8 text-slate-600'>
              These cumulative programme figures are paired with their reporting
              period and source. CeRID will continue strengthening this record as
              project reports are reviewed and consolidated.
            </p>
            <p className='mt-3 flex items-start gap-2 text-sm leading-6 text-slate-500'>
              <FileCheck2 className='mt-0.5 h-4 w-4 shrink-0 text-brand' aria-hidden='true' />
              Figures are drawn from CeRID programme records and should be read with the evidence note on each result.
            </p>
          </div>
        </div>

        <dl className='grid border-b border-slate-300 md:grid-cols-2 lg:grid-cols-3'>
          {metrics.map((item, index) => (
            <div
              key={item.$id}
              className={`border-slate-300 py-10 md:px-8 ${
                index > 0 ? 'border-t md:border-t-0' : ''
              } ${index % 2 === 1 ? 'md:border-l' : ''} ${
                index > 1 ? 'lg:border-l' : ''
              }`}
            >
              <dd className='text-5xl font-extrabold tracking-[-0.045em] text-forest md:text-6xl'>
                {item.metric_value}
              </dd>
              <dt className='mt-4 max-w-xs text-base font-bold leading-7 text-slate-950'>
                {item.metric_label}
              </dt>
              <p className='mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500'>
                {item.reporting_period || 'Reporting period to be confirmed'}
              </p>
              <p className='mt-2 text-sm leading-6 text-slate-500'>
                Source: {item.source || 'CeRID programme records'}
              </p>
            </div>
          ))}
        </dl>

        <div className='mt-16'>
          <div className='grid gap-5 md:grid-cols-[0.55fr_1.45fr]'>
            <div>
              <p className='eyebrow'>Outcome narratives</p>
              <h2 className='mt-4 text-3xl font-extrabold tracking-[-0.03em] text-slate-950'>
                What changed—and how.
              </h2>
            </div>
            <div className='border-t border-slate-300'>
              {documents.map((item, index) => (
                <article
                  key={item.$id}
                  className='grid gap-5 border-b border-slate-300 py-8 md:grid-cols-[64px_1fr_auto] md:items-start'
                >
                  <span className='text-sm font-extrabold text-brand' aria-hidden='true'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className='text-2xl font-extrabold tracking-[-0.025em] text-slate-950'>
                      {item.title}
                    </h3>
                    <p className='mt-3 max-w-2xl line-clamp-3 leading-7 text-slate-600'>
                      {item.excerpt}
                    </p>
                    <p className='mt-4 text-xs font-bold uppercase tracking-[0.1em] text-slate-500'>
                      Evidence status: {item.evidence_status || 'Programme narrative'}
                    </p>
                  </div>
                  <Link
                    href={`/impact/${item.slug}`}
                    className='inline-flex items-center gap-2 text-sm font-bold text-brand md:mt-1'
                    aria-label={`Read the ${item.title} result`}
                  >
                    Read result <ArrowRight className='h-4 w-4' aria-hidden='true' />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
