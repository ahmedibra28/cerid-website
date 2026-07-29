import ItemCard from '@/components/item-card'
import { getNews } from '@/lib/content'

export default async function News() {
  const { documents } = await getNews()

  return (
    <section className='site-container' id='news'>
      <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
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
