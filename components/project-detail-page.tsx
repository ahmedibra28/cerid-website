import Link from 'next/link'
import Markdown from 'react-markdown'
import { CalendarDays, MapPin } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import Footer from '@/components/footer-contact'
import type { CardDocument } from '@/lib/content'

function formatPeriod(date?: string) {
  if (!date) return ''
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function projectBody(content: string) {
  const requestedSections = [
    { title: 'Project Overview', aliases: ['project overview'] },
    { title: 'Overall Goal', aliases: ['overall goal'] },
    {
      title: 'Key Objectives',
      aliases: ['key objectives', 'project objectives'],
    },
    {
      title: 'Emerging Impact',
      aliases: ['emerging impact', 'project impact'],
    },
  ]
  const headings = Array.from(content.matchAll(/^(#{1,6})\s+(.+)$/gm)).map(
    (match) => ({
      start: match.index,
      contentStart: (match.index ?? 0) + match[0].length,
      level: match[1].length,
      label: match[2].replace(/[*_`]/g, '').trim().toLowerCase(),
    })
  )

  return requestedSections
    .map((section) => {
      const headingIndex = headings.findIndex((heading) =>
        section.aliases.includes(heading.label)
      )
      if (headingIndex < 0) return ''

      const heading = headings[headingIndex]
      const nextHeading = headings
        .slice(headingIndex + 1)
        .find((candidate) => candidate.level <= heading.level)
      const sectionContent = content
        .slice(heading.contentStart, nextHeading?.start ?? content.length)
        .trim()

      return `## ${section.title}\n\n${sectionContent}`
    })
    .filter(Boolean)
    .join('\n\n')
}

function headingId(value: string) {
  return value
    .toLowerCase()
    .replace(/[*_`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function ProjectDetailPage({
  document,
}: {
  document: CardDocument
}) {
  const location =
    document.location ||
    (document.locations as string[] | undefined)?.join(' · ') ||
    'Somalia'
  const period =
    document.start_date && document.end_date
      ? `${formatPeriod(document.start_date)} – ${formatPeriod(document.end_date)}`
      : 'Programme archive'
  const partner =
    document.funding_partner ||
    document.member_organization ||
    document.partner_program
  const highlights = document.highlights ?? []
  const status = document.status || 'Archive'
  const ongoing = status === 'Ongoing'
  const body = projectBody(document.content)
  const sectionLinks = Array.from(body.matchAll(/^##\s+(.+)$/gm)).map((match) => ({
    label: match[1].replace(/[*_`]/g, '').trim(),
    id: headingId(match[1]),
  }))

  return (
    <>
      <main>
        <header className='bg-forest text-white'>
          <div className='site-container py-14 md:py-20 lg:py-24'>
            <nav className='flex items-center gap-2 text-xs font-semibold text-white/60' aria-label='Breadcrumb'>
              <Link href='/' className='hover:text-white'>Home</Link>
              <span aria-hidden='true'>/</span>
              <Link href='/#projects' className='hover:text-white'>Projects</Link>
            </nav>

            <div className='mt-12 grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-end'>
              <div>
                <span className={`inline-flex border px-3 py-2 text-xs font-extrabold uppercase tracking-[0.15em] ${
                  ongoing
                    ? 'border-emerald-300 bg-emerald-300 text-forest'
                    : 'border-white/35 text-white'
                }`}>
                  {status}
                </span>
                <h1 className='mt-6 max-w-5xl text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl'>
                  {document.title}
                </h1>
                {document.excerpt && (
                  <p className='mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9'>
                    {document.excerpt}
                  </p>
                )}
              </div>

              <dl className='border-t border-white/25 pt-6 text-sm lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0'>
                <div className='flex gap-3 border-b border-white/15 pb-5'>
                  <CalendarDays className='mt-0.5 h-5 w-5 shrink-0 text-emerald-300' aria-hidden='true' />
                  <div>
                    <dt className='font-bold text-white'>Implementation period</dt>
                    <dd className='mt-1 leading-6 text-white/65'>{period}</dd>
                  </div>
                </div>
                <div className='flex gap-3 py-5'>
                  <MapPin className='mt-0.5 h-5 w-5 shrink-0 text-emerald-300' aria-hidden='true' />
                  <div>
                    <dt className='font-bold text-white'>Location</dt>
                    <dd className='mt-1 leading-6 text-white/65'>{location}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <section className='bg-white pt-10 md:pt-14' aria-label='Project overview image'>
          <div className='site-container'>
            <div className='relative h-[260px] overflow-hidden bg-slate-100 sm:h-auto sm:min-h-[300px] sm:aspect-[16/7]'>
              <BlurImage
                src={document.coverImage || document.image || '/images/research.webp'}
                alt={`${document.title} field activity`}
                fill
                priority
                sizes='(min-width: 1280px) 1280px, 100vw'
                className='object-cover'
              />
            </div>
          </div>
        </section>

        {highlights.length > 0 && (
          <section className='bg-white pt-12 md:pt-16' aria-labelledby='results-heading'>
            <div className='site-container'>
              <div className='border-y border-slate-300 py-8'>
                <p id='results-heading' className='eyebrow'>
                  Selected results to date
                </p>
                <dl className='mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                  {highlights.map((item) => (
                    <div key={`${item.value}-${item.label}`}>
                      <dd className='text-4xl font-extrabold tracking-[-0.04em] text-forest md:text-5xl'>
                        {item.value}
                      </dd>
                      <dt className='mt-2 text-sm font-bold leading-6 text-slate-600'>
                        {item.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        )}

        <article className='section-padding bg-white'>
          <div className='site-container grid gap-12 lg:grid-cols-[260px_minmax(0,760px)] lg:gap-20'>
            <aside className='h-fit border-t-2 border-brand pt-5 lg:sticky lg:top-36'>
              <p className='eyebrow'>Project at a glance</p>
              <dl className='mt-6 grid gap-5 text-sm'>
                <div>
                  <dt className='font-bold text-slate-950'>Status</dt>
                  <dd className='mt-1 text-slate-600'>{status}</dd>
                </div>
                {document.project_code && (
                  <div>
                    <dt className='font-bold text-slate-950'>Project code</dt>
                    <dd className='mt-1 text-slate-600'>{document.project_code}</dd>
                  </div>
                )}
                {partner && (
                  <div>
                    <dt className='font-bold text-slate-950'>Funding partner</dt>
                    <dd className='mt-1 leading-6 text-slate-600'>{partner}</dd>
                  </div>
                )}
                {document.program_areas && document.program_areas.length > 0 && (
                  <div>
                    <dt className='font-bold text-slate-950'>Programme areas</dt>
                    <dd className='mt-2 flex flex-wrap gap-2'>
                      {document.program_areas.map((area) => (
                        <span key={area} className='border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-600'>
                          {area}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className='font-bold text-slate-950'>Implemented by</dt>
                  <dd className='mt-1 text-slate-600'>CeRID</dd>
                </div>
              </dl>
              {sectionLinks.length > 1 && (
                <nav className='mt-8 border-t border-slate-200 pt-6' aria-label='On this project page'>
                  <p className='text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500'>On this page</p>
                  <ol className='mt-4 grid gap-3'>
                    {sectionLinks.map((section, index) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className='flex gap-3 text-sm font-semibold leading-5 text-slate-600 hover:text-brand'>
                          <span className='text-xs text-slate-400'>{String(index + 1).padStart(2, '0')}</span>
                          {section.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </aside>

            <Markdown
              components={{
                h2: ({ children }) => {
                  const label = String(children)
                  return <h2 id={headingId(label)} className='scroll-mt-36'>{children}</h2>
                },
              }}
              className='prose prose-lg prose-slate max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-h1:mt-16 prose-h1:text-4xl prose-h2:mt-14 prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-8 prose-li:my-2 prose-a:font-semibold prose-a:text-brand prose-strong:text-slate-950 prose-blockquote:border-brand prose-blockquote:bg-warm-white prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic'
            >
              {body}
            </Markdown>
          </div>
        </article>

      </main>
      <Footer />
    </>
  )
}
