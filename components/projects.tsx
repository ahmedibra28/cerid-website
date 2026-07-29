import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import { getProjects } from '@/lib/content'

export default async function Projects() {
  const { documents } = await getProjects()
  const projects = documents.filter(
    (item) => !['66474565003be473ed58', '664745b400055b0ce0b3'].includes(item.$id)
  )
  const featured = projects[0]

  if (!featured) return null

  return (
    <section className='section-padding bg-white' id='projects'>
      <div className='site-container'>
        <div className='flex flex-col justify-between gap-5 md:flex-row md:items-end'>
          <div>
            <p className='eyebrow'>Our work in action</p>
            <h2 className='section-title mt-4'>Programmes built with communities.</h2>
          </div>
          <Link href={`/projects/${featured.slug}`} className='inline-flex items-center gap-2 text-sm font-bold text-brand'>
            Explore our projects <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div className='mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]'>
          <article className='group'>
            <Link href={`/projects/${featured.slug}`}>
              <div className='relative aspect-[16/10] overflow-hidden'>
                <BlurImage src={featured.image || '/images/Humanitarian.JPEG'} alt={featured.title} fill className='object-cover transition-transform duration-500 group-hover:scale-[1.02]' />
              </div>
              <p className='eyebrow mt-7'>Featured programme</p>
              <h3 className='mt-3 text-3xl font-bold tracking-tight text-slate-950'>{featured.title}</h3>
              <p className='mt-4 max-w-3xl line-clamp-3 text-lg leading-8 text-slate-600'>{featured.excerpt}</p>
            </Link>
          </article>

          <div className='border-t border-slate-300'>
            {projects.slice(1, 5).map((project) => (
              <Link
                key={project.$id}
                href={`/projects/${project.slug}`}
                className='group grid grid-cols-[112px_1fr] gap-5 border-b border-slate-300 py-6'
              >
                <div className='relative aspect-square overflow-hidden bg-slate-100'>
                  <BlurImage src={project.image || '/images/research.webp'} alt='' fill className='object-cover' />
                </div>
                <div>
                  <h3 className='font-bold leading-6 text-slate-950 group-hover:text-brand'>{project.title}</h3>
                  <span className='mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand'>
                    View programme <ArrowRight className='h-4 w-4' />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
