import React from 'react'
import { getPage } from '@/lib/content'
import Footer from '@/components/footer-contact'
import CoreValues from '@/components/core-values'
import BlurImage from '@/components/blur-image'

export default async function Page() {
  const item = await getPage('governance')
  const itemData = item?.documents?.[0]

  return (
    <>
      <section className='bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-48 text-white relative h-[50vh]'>
        <BlurImage
          src='/images/Participants_posing_for_a_group_photo_after_the_completion_of_business_skills_and_entrepreneurship_training.jpg'
          alt={itemData?.title || 'CeRID core values'}
          className='inset-0 w-full h-full object-cover object-center'
          priority
          fill
        />
      </section>

      <div className='container mx-auto px-4 md:px-6 py-12'>
        <CoreValues />
      </div>

      <Footer />
    </>
  )
}
