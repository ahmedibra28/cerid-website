'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Handshake, MapPin } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import type { CardDocument } from '@/lib/content'

type ProjectCategory = 'All' | 'Ongoing' | 'Completed' | 'Archive'

function category(project: CardDocument): Exclude<ProjectCategory, 'All'> {
  if (project.status === 'Ongoing') return 'Ongoing'
  if (project.status === 'Completed') return 'Completed'
  return 'Archive'
}

function year(date?: string) {
  return date ? new Date(`${date}T00:00:00Z`).getUTCFullYear() : null
}

export default function ProjectsArchive({
  projects,
}: {
  projects: CardDocument[]
}) {
  const [active, setActive] = useState<ProjectCategory>('All')
  const filters: ProjectCategory[] = ['All', 'Ongoing', 'Completed', 'Archive']
  const counts = useMemo(
    () => ({
      All: projects.length,
      Ongoing: projects.filter((project) => category(project) === 'Ongoing').length,
      Completed: projects.filter((project) => category(project) === 'Completed').length,
      Archive: projects.filter((project) => category(project) === 'Archive').length,
    }),
    [projects]
  )
  const ordered = useMemo(() => {
    const rank = { Ongoing: 0, Completed: 1, Archive: 2 }
    return [...projects].sort(
      (left, right) => rank[category(left)] - rank[category(right)]
    )
  }, [projects])
  const visible =
    active === 'All'
      ? ordered
      : ordered.filter((project) => category(project) === active)

  return (
    <section className='section-padding bg-warm-white' aria-labelledby='projects-heading'>
      <div className='site-container'>
        <div className='grid gap-8 border-b border-slate-300 pb-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end'>
          <div>
            <p className='eyebrow'>Project portfolio</p>
            <h2 id='projects-heading' className='mt-4 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 md:text-4xl'>
              All CeRID projects
            </h2>
          </div>
          <div className='flex flex-wrap gap-x-7 gap-y-3 lg:justify-end' aria-label='Filter projects by status'>
            {filters.map((filter) => (
              <button
                key={filter}
                type='button'
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={`border-b-2 pb-2 text-sm font-bold transition-colors ${
                  active === filter
                    ? 'border-brand text-brand'
                    : 'border-transparent text-slate-500 hover:border-slate-400 hover:text-slate-950'
                }`}
              >
                {filter} <span className='ml-1 text-xs opacity-65'>{counts[filter]}</span>
              </button>
            ))}
          </div>
        </div>
        <p className='mt-5 max-w-3xl text-sm leading-6 text-slate-500'>
          “Archive” identifies historical programme records whose implementation
          dates or completion status still need to be confirmed. These records
          remain public while CeRID completes the portfolio review.
        </p>

        <div className='mt-10 grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
          {visible.map((project) => {
            const projectCategory = category(project)
            const period =
              year(project.start_date) && year(project.end_date)
                ? `${year(project.start_date)}–${year(project.end_date)}`
                : 'Programme archive'
            const location =
              project.location ||
              project.locations?.join(' · ') ||
              'Somalia'
            const partner =
              project.funding_partner ||
              project.member_organization ||
              project.partner_program

            return (
              <article key={project.$id} className='group border-t border-slate-300 pt-5'>
                <Link href={`/projects/${project.slug}`} className='block'>
                  <div className='relative aspect-[4/3] overflow-hidden bg-slate-200'>
                    <BlurImage
                      src={project.image || '/images/research.webp'}
                      alt={`${project.title} project`}
                      fill
                      sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      className='object-cover transition-transform duration-500 group-hover:scale-[1.025]'
                    />
                  </div>
                  <div className='mt-6 flex items-center justify-between gap-4'>
                    <p className='eyebrow'>CeRID project</p>
                    <span className={`border px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] ${
                      projectCategory === 'Ongoing'
                        ? 'border-brand bg-brand text-white'
                        : 'border-slate-400 text-slate-600'
                    }`}>
                      {projectCategory}
                    </span>
                  </div>
                  <h3 className='mt-4 text-2xl font-extrabold leading-tight tracking-[-0.025em] text-slate-950 group-hover:text-brand'>
                    {project.title}
                  </h3>
                  <p className='mt-4 line-clamp-3 leading-7 text-slate-600'>
                    {project.excerpt || project.content}
                  </p>
                  <div className='mt-5 grid gap-2 text-sm text-slate-500'>
                    <span className='flex items-start gap-2'>
                      <CalendarDays className='mt-0.5 h-4 w-4 shrink-0 text-brand' aria-hidden='true' />
                      {period}
                    </span>
                    <span className='flex items-start gap-2'>
                      <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-brand' aria-hidden='true' />
                      {location}
                    </span>
                    {partner && (
                      <span className='flex items-start gap-2'>
                        <Handshake className='mt-0.5 h-4 w-4 shrink-0 text-brand' aria-hidden='true' />
                        {partner}
                      </span>
                    )}
                  </div>
                  <span className='mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand'>
                    View project <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </span>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
