import Link from 'next/link'
import Markdown from 'react-markdown'
import { ArrowUpRight, Facebook, MessageCircle, Youtube } from 'lucide-react'
import { getSocialUpdates } from '@/lib/content'

const platformStyles = {
  Facebook: {
    icon: Facebook,
    accent: 'text-[#1877f2]',
    border: 'border-[#1877f2]',
  },
  'X / Twitter': {
    icon: MessageCircle,
    accent: 'text-slate-950',
    border: 'border-slate-950',
  },
  YouTube: {
    icon: Youtube,
    accent: 'text-[#ff0000]',
    border: 'border-[#ff0000]',
  },
} as const

function formatDate(date?: string) {
  if (!date) return null

  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

export default async function SocialUpdates() {
  const { documents } = await getSocialUpdates()

  if (documents.length === 0) return null

  return (
    <aside className='lg:border-l lg:border-slate-300 lg:pl-10 xl:pl-12' aria-labelledby='social-updates-title'>
      <div className='border-b border-slate-300 pb-8'>
        <p className='eyebrow'>Connect with CeRID</p>
        <h2 id='social-updates-title' className='mt-4 text-3xl font-extrabold tracking-tight text-slate-950'>
          Latest from social media.
        </h2>
        <p className='mt-4 leading-7 text-slate-600'>
          Follow programme updates, field stories, and videos from the communities we work alongside.
        </p>
      </div>

      <div className='mt-8 grid gap-6'>
        {documents.map((update) => {
            const platform = update.platform as keyof typeof platformStyles
            const style = platformStyles[platform] || platformStyles['X / Twitter']
            const Icon = style.icon
            const published = formatDate(update.published_date)

            return (
              <article
                key={update.$id}
                className={`flex min-h-[280px] flex-col border border-t-4 border-slate-200 bg-warm-white p-6 ${style.border}`}
              >
                <div className='flex items-center justify-between gap-4'>
                  <p className={`flex items-center gap-2 text-sm font-extrabold ${style.accent}`}>
                    <Icon className='h-5 w-5' aria-hidden='true' />
                    {update.platform}
                  </p>
                  {published && (
                    <time dateTime={update.published_date} className='text-xs font-semibold text-slate-500'>
                      {published}
                    </time>
                  )}
                </div>

                <h3 className='mt-7 text-2xl font-extrabold leading-tight tracking-tight text-slate-950'>
                  {update.title}
                </h3>
                <Markdown className='prose prose-slate mt-5 max-w-none flex-1 prose-p:leading-7 prose-a:font-semibold prose-a:text-brand'>
                  {update.content}
                </Markdown>

                {update.external_url && (
                  <Link
                    href={update.external_url}
                    target='_blank'
                    rel='noreferrer'
                    className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${style.accent}`}
                  >
                    {update.cta_label || `View on ${update.platform}`}
                    <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
                    <span className='sr-only'>(opens in a new tab)</span>
                  </Link>
                )}
              </article>
            )
        })}
      </div>
    </aside>
  )
}
