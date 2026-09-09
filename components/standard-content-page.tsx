import Markdown from 'react-markdown'
import BlurImage from '@/components/blur-image'
import Footer from '@/components/footer-contact'
import InteriorHero from '@/components/interior-hero'
import type { CardDocument } from '@/lib/content'

type StandardContentPageProps = {
  document: CardDocument
  eyebrow: string
  description?: string
  image?: string
  imageAlt?: string
}

export default function StandardContentPage({
  document,
  eyebrow,
  description,
  image,
  imageAlt,
}: StandardContentPageProps) {
  return (
    <>
      <InteriorHero
        eyebrow={eyebrow}
        title={document.title}
        description={description || document.excerpt}
      />
      {image && (
        <div className='site-container -mt-1 pt-10 md:pt-14'>
          <div className='relative aspect-[16/7] overflow-hidden'>
            <BlurImage src={image} alt={imageAlt || document.title} fill className='object-cover' priority />
          </div>
        </div>
      )}
      <main className='section-padding bg-white'>
        <div className='site-container grid gap-12 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-20'>
          <aside className='border-t-2 border-brand pt-5'>
            <p className='eyebrow'>In this section</p>
            <p className='mt-4 text-sm leading-6 text-slate-500'>
              Learn about CeRID&apos;s approach, governance, and commitment to community-led development.
            </p>
          </aside>
          <Markdown className='prose prose-lg prose-slate max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:mt-14 prose-h2:text-3xl prose-p:leading-8 prose-a:font-semibold prose-a:text-brand prose-strong:text-slate-950'>
            {document.content}
          </Markdown>
        </div>
      </main>
      <Footer />
    </>
  )
}
