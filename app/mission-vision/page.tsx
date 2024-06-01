import React from 'react'
import { getPage } from '@/app/appwrite'
import Footer from '@/components/footer'
import MissionVision from '@/components/mission-vision'

export default async function Page() {
  const item = await getPage('about-us')
  const itemData = item?.documents?.[0]

  return (
    <>
      <section className='bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto'>
            <div className='space-y-4'>
              <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                Mission & Vision
              </h1>
              <div className='flex items-center space-x-4 text-gray-500 dark:text-gray-400'>
                <div>
                  <span className='font-medium'>CeRID</span>
                  <span> - </span>
                  <time dateTime='2023-05-16'>
                    {new Date(itemData?.$createdAt).toLocaleDateString(
                      'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20'>
        <MissionVision />
      </div>

      <Footer />
    </>
  )
}
