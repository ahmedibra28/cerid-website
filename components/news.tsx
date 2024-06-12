import React from 'react'
import { getNews } from '@/app/appwrite'
import ItemCard from './item-card'

export default async function News() {
  const item = await getNews()
  const itemData = item?.documents

  return (
    <section className='py-16 md:py-24 px-6 md:px-12' id='news'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {itemData?.map((item) => (
            <ItemCard
              key={item?.$id}
              item={{ ...item, slug: `/news/${item?.slug}` }}
            />
          ))}
        </div>

        {/* <div className='text-end'>
          <Link href='/news' passHref>
            <Button variant='outline' className='w-48 mr-auto mt-8'>
              View All Thematic Areas
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}
