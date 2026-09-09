import Link from 'next/link'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import { getProjects } from '@/lib/content'

export default async function Projects() {
  const { documents } = await getProjects()
  const projects = documents.filter((item) => item.featured).slice(0, 3)
  if (!projects.length) return null

  return (
    <section className='section-padding bg-warm-white' id='projects'>
      <div className='site-container'>
        <div className='flex flex-col justify-between gap-5 md:flex-row md:items-end'>
          <div>
            <p className='eyebrow'>Our work in action</p>
            <h2 className='section-title mt-4'>Current and completed projects.</h2>
          </div>
          <div className='max-w-md'>
            <p className='text-base leading-7 text-slate-600'>
              Long-term programmes combining local knowledge, practical support, and accountable partnerships.
            </p>
            <Link href='/projects' className='mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand'>
              Explore all projects <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>

        <div className='mt-12 grid gap-x-7 gap-y-12 lg:grid-cols-3'>
          {projects.map((project) => (
            <article key={project.$id} className='group border-t border-slate-300 pt-5'>
              <Link href={`/projects/${project.slug}`} className='block'>
                <div className='relative aspect-[4/3] overflow-hidden bg-slate-100'>
                  <BlurImage
                    src={project.image || '/images/research.webp'}
                    alt={`${project.title} project`}
                    fill
                    sizes='(min-width: 1024px) 33vw, 100vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-[1.025]'
                  />
                </div>
                <div className='mt-6 flex items-center justify-between gap-4'>
                  <p className='eyebrow'>CeRID project</p>
                  <span className={`border px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] ${
                    project.status === 'Ongoing'
                      ? 'border-brand bg-brand text-white'
                      : 'border-slate-400 text-slate-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className='mt-4 text-2xl font-extrabold leading-tight tracking-[-0.025em] text-slate-950 group-hover:text-brand'>
                  {project.title}
                </h3>
                <p className='mt-4 line-clamp-3 leading-7 text-slate-600'>
                  {project.excerpt}
                </p>
                <div className='mt-5 grid gap-2 text-sm text-slate-500'>
                  {(project.start_date || project.end_date) && (
                    <span className='flex items-start gap-2'>
                      <CalendarDays className='mt-0.5 h-4 w-4 shrink-0 text-brand' aria-hidden='true' />
                      {project.start_date?.slice(0, 4)}–{project.end_date?.slice(0, 4)}
                    </span>
                  )}
                  {(project.location || project.locations?.length) && (
                    <span className='flex items-start gap-2'>
                      <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-brand' aria-hidden='true' />
                      {project.location || project.locations?.join(' · ')}
                    </span>
                  )}
                </div>
                <span className='mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand'>
                  View project <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
