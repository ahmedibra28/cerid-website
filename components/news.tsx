import ItemCard from '@/components/item-card'
import { getNews } from '@/lib/content'

export default async function News() {
  const { documents } = await getNews()

  return (
    <section id='news' aria-labelledby='latest-news-title'>
      <div className='border-b border-slate-300 pb-8'>
        <p className='eyebrow'>Latest news</p>
        <h2 id='latest-news-title' className='mt-4 text-3xl font-extrabold tracking-tight text-slate-950'>
          Stories from our work.
        </h2>
      </div>
      <div className='mt-10 grid gap-10 md:grid-cols-2'>
        {documents.map((item) => (
          <ItemCard
            key={item.$id}
            item={{ ...item, slug: `/news/${item.slug}` }}
          />
        ))}
      </div>
    </section>
  )
}
