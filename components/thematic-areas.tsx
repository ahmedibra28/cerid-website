import ItemCard from '@/components/item-card'
import { getThematicAreas } from '@/lib/content'

export default async function ThematicAreas() {
  const { documents } = await getThematicAreas()

  return (
    <section className='site-container' id='thematic-areas'>
      <div className='grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
        {documents.map((item) => (
          <ItemCard
            key={item.$id}
            item={{ ...item, slug: `/thematic-areas/${item.slug}` }}
          />
        ))}
      </div>
    </section>
  )
}
