import React from 'react'
import { getProjects } from '@/app/appwrite'
import ItemCard from './item-card'

export default async function Projects() {
  const item = await getProjects()
  const itemData = item?.documents

  return (
    <section
      className='bg-gray-100 dark:bg-gray-800 py-16 md:py-24 px-6 md:px-12'
      id='projects'
    >
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center'>
          Current CeRID Projects
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {itemData
            ?.filter(
              (item) =>
                !['66474565003be473ed58', '664745b400055b0ce0b3'].includes(
                  item.$id
                )
            )
            ?.map((item) => (
              <ItemCard
                key={item?.$id}
                item={{ ...item, slug: `/projects/${item?.slug}` }}
              />
            ))}
        </div>

        {/* <div className='text-end'>
          <Link href='/projects' passHref>
            <Button variant='outline' className='w-48 mr-auto mt-8'>
              View All Thematic Areas
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}
