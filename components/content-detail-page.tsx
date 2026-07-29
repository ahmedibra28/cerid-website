import Link from 'next/link'
import Markdown from 'react-markdown'
import BlurImage from '@/components/blur-image'
import Footer from '@/components/footer-contact'
import type { CardDocument } from '@/lib/content'

type ContentDetailPageProps = {
  document: CardDocument
  image?: string
  imagePosition?: 'object-center' | 'object-top'
  eyebrow?: string
  parentHref?: string
  parentLabel?: string
}

export default function ContentDetailPage({
  document,
  image,
  imagePosition = 'object-center',
  eyebrow = 'Field impact',
  parentHref = '/',
  parentLabel = 'CeRID programmes',
}: ContentDetailPageProps) {
  const publishedAt = new Date(document.$createdAt)
  const formattedDate = publishedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <header className='bg-warm-white'>
        <div className='site-container py-14 md:py-20'>
          <nav className='flex items-center gap-2 text-xs font-semibold text-slate-500' aria-label='Breadcrumb'>
            <Link href='/' className='hover:text-brand'>Home</Link>
            <span aria-hidden='true'>/</span>
            <Link href={parentHref} className='text-slate-800 hover:text-brand'>{parentLabel}</Link>
          </nav>
          <div className='mt-12 max-w-5xl'>
            <p className='eyebrow'>{eyebrow}</p>
            <h1 className='mt-5 text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl'>
              {document.title}
            </h1>
            {document.excerpt && (
              <p className='mt-7 line-clamp-5 max-w-3xl text-lg leading-8 text-slate-600 sm:line-clamp-none sm:text-xl sm:leading-9'>
                {document.excerpt}
              </p>
            )}
            <p className='mt-7 text-sm font-semibold text-slate-500'>
              <span className='text-slate-950'>CeRID</span>
              <span aria-hidden='true'> · </span>
              <time dateTime={publishedAt.toISOString()}>{formattedDate}</time>
            </p>
          </div>
        </div>
      </header>

      {image && (
        <div className='site-container bg-white pt-10 md:pt-14'>
          <div className='relative aspect-[16/7] overflow-hidden'>
            <BlurImage
              src={image}
              alt={document.title}
              className={`object-cover ${imagePosition}`}
              priority
              fill
            />
          </div>
        </div>
      )}

      <article className='section-padding bg-white'>
        <div className='site-container grid gap-12 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-20'>
          <aside className='border-t-2 border-brand pt-5'>
            <p className='eyebrow'>Our approach</p>
            <p className='mt-4 text-sm leading-6 text-slate-500'>
              Locally led programmes informed by evidence, partnership, and community priorities.
            </p>
          </aside>
          <Markdown className='prose prose-lg prose-slate max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:mt-14 prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-8 prose-li:my-2 prose-a:font-semibold prose-a:text-brand prose-strong:text-slate-950'>
            {document.content}
          </Markdown>
        </div>
      </article>

      <Footer />
    </>
  )
}
