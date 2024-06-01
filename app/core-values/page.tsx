import React from 'react'
import { getPage } from '@/app/appwrite'
import Footer from '@/components/footer'
import CoreValues from '@/components/core-values'
import BlurImage from '@/components/blur-image'

export default async function Page() {
  const item = await getPage('governance')
  const itemData = item?.documents?.[0]

  return (
    <>
      <section className='bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-48 text-white relative h-[50vh]'>
        <BlurImage
          src='https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a122400099b42aca4/view?project=65905182817b88c986bf'
          alt={itemData?.title}
          className='inset-0 w-full h-full object-cover object-center'
          priority
          fill
        />
      </section>

      <div className='container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20'>
        <CoreValues />
      </div>

      <Footer />
    </>
  )
}
