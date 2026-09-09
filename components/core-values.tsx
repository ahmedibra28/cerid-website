import Markdown from 'react-markdown'
import { getCoreValues } from '@/lib/content'

export default async function CoreValues() {
  const { documents } = await getCoreValues()

  return (
    <section className='site-container' id='core-values'>
      <div className='border-t border-slate-300'>
        {documents.map((item, index) => (
          <article
            key={item.$id}
            className='grid gap-5 border-b border-slate-300 py-9 md:grid-cols-[80px_240px_1fr] md:gap-10 md:py-12'
          >
            <span className='text-sm font-extrabold text-brand'>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className='text-2xl font-bold tracking-tight text-slate-950'>{item.title}</h2>
            <Markdown className='prose prose-slate max-w-2xl text-base leading-7'>
              {item.content}
            </Markdown>
          </article>
        ))}
      </div>
    </section>
  )
}
