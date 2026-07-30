import Link from 'next/link'
import Markdown from 'react-markdown'
import { ArrowRight, CalendarRange, Database, FileCheck2 } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import Footer from '@/components/footer-contact'
import type { CardDocument } from '@/lib/content'

export default function ImpactDetailPage({
  document,
}: {
  document: CardDocument
}) {
  const reviewed = document.lastReviewed
    ? new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(new Date(`${document.lastReviewed}T00:00:00Z`))
    : null

  return (
    <>
      <main>
        <header className='bg-slate-950 text-white'>
          <div className='site-container py-14 md:py-20 lg:py-24'>
            <nav className='flex items-center gap-2 text-xs font-semibold text-white/55' aria-label='Breadcrumb'>
              <Link href='/' className='hover:text-white'>Home</Link>
              <span aria-hidden='true'>/</span>
              <Link href='/impact' className='hover:text-white'>Impact and results</Link>
            </nav>

            <div className='mt-12 grid gap-12 lg:grid-cols-[1fr_0.48fr] lg:items-end'>
              <div>
                <p className='eyebrow text-emerald-300'>Outcome record</p>
                <h1 className='mt-5 max-w-4xl text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl'>
                  {document.title}
                </h1>
                {document.excerpt && (
                  <p className='mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9'>
                    {document.excerpt}
                  </p>
                )}
              </div>

              <div className='border-t border-white/20 pt-7 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0'>
                {document.metric_value ? (
                  <>
                    <p className='text-5xl font-extrabold tracking-[-0.045em] text-emerald-300'>
                      {document.metric_value}
                    </p>
                    <p className='mt-4 font-bold leading-7 text-white'>
                      {document.metric_label}
                    </p>
                  </>
                ) : (
                  <p className='font-bold text-white'>Narrative outcome record</p>
                )}
                <p className='mt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/50'>
                  {document.reporting_period || 'Reporting period to be confirmed'}
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className='bg-warm-white py-10 md:py-14' aria-labelledby='evidence-note'>
          <div className='site-container grid gap-7 lg:grid-cols-[0.8fr_1.2fr]'>
            <div>
              <p className='eyebrow'>Evidence note</p>
              <h2 id='evidence-note' className='mt-4 text-2xl font-extrabold tracking-tight text-slate-950'>
                How to read this result
              </h2>
            </div>
            <dl className='grid gap-5 border-t border-slate-300 pt-6 sm:grid-cols-3'>
              <div>
                <dt className='flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-500'>
                  <CalendarRange className='h-4 w-4 text-brand' aria-hidden='true' />
                  Period
                </dt>
                <dd className='mt-3 text-sm font-semibold leading-6 text-slate-950'>
                  {document.reporting_period || 'To be confirmed'}
                </dd>
              </div>
              <div>
                <dt className='flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-500'>
                  <Database className='h-4 w-4 text-brand' aria-hidden='true' />
                  Source
                </dt>
                <dd className='mt-3 text-sm font-semibold leading-6 text-slate-950'>
                  {document.source || 'CeRID programme records'}
                </dd>
              </div>
              <div>
                <dt className='flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-500'>
                  <FileCheck2 className='h-4 w-4 text-brand' aria-hidden='true' />
                  Status
                </dt>
                <dd className='mt-3 text-sm font-semibold leading-6 text-slate-950'>
                  {document.evidence_status || 'Programme narrative'}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className='bg-white pt-10 md:pt-14' aria-label='Impact story image'>
          <div className='site-container'>
            <div className='relative aspect-[16/7] overflow-hidden bg-slate-100'>
              <BlurImage
                src={document.coverImage || document.image || '/images/research.webp'}
                alt={`${document.title} programme activity`}
                className='object-cover'
                priority
                fill
              />
            </div>
          </div>
        </section>

        <article className='section-padding bg-white'>
          <div className='site-container grid gap-12 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-20'>
            <aside className='h-fit border-t-2 border-brand pt-5 lg:sticky lg:top-36'>
              <p className='eyebrow'>Record information</p>
              <p className='mt-4 text-sm leading-6 text-slate-500'>
                This page separates reported results from the programme themes and projects that contributed to them.
              </p>
              {reviewed && (
                <p className='mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500'>
                  Last reviewed {reviewed}
                </p>
              )}
              <Link href='/projects' className='mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand'>
                Explore related projects <ArrowRight className='h-4 w-4' aria-hidden='true' />
              </Link>
            </aside>
            <Markdown className='prose prose-lg prose-slate max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:mt-14 prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-8 prose-li:my-2 prose-a:font-semibold prose-a:text-brand prose-strong:text-slate-950'>
              {document.content}
            </Markdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
