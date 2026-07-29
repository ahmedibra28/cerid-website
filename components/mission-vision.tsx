import Markdown from 'react-markdown'
import { getShorts } from '@/lib/content'

export default async function MissionVision() {
  const mission = (await getShorts('mission')).documents[0]
  const vision = (await getShorts('vision')).documents[0]

  if (!mission || !vision) return null

  return (
    <section className='site-container'>
      <div className='grid lg:grid-cols-2'>
        <article className='bg-forest p-9 text-white md:p-14 lg:p-16'>
          <p className='text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-300'>Our mission</p>
          <h2 className='mt-5 text-4xl font-extrabold tracking-tight'>{mission.title}</h2>
          <Markdown className='prose prose-lg prose-invert mt-7 leading-8 text-white/80'>
            {mission.content}
          </Markdown>
        </article>
        <article className='bg-warm-white p-9 md:p-14 lg:p-16'>
          <p className='eyebrow'>Our vision</p>
          <h2 className='mt-5 text-4xl font-extrabold tracking-tight text-slate-950'>{vision.title}</h2>
          <Markdown className='prose prose-lg prose-slate mt-7 leading-8'>
            {vision.content}
          </Markdown>
        </article>
      </div>
    </section>
  )
}
