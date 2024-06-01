import React from 'react'
import { getProjectsBySlug } from '@/app/appwrite'
import Markdown from 'react-markdown'
import Footer from '@/components/footer'
import BlurImage from '@/components/blur-image'

export default async function Page({ params }: { params: { slug: string } }) {
  const item = await getProjectsBySlug(params.slug)
  const itemData = item?.documents?.[0]

  const image = itemData?.coverImage || itemData?.image

  const objectPosition = [
    'climate-smart-agriculture-and-economic-empowerment',
    'emergency-wash-water-sanitation-and-hygiene-support-for-disasterconflict-affected-people-in-somalia',
  ].includes(params.slug)
    ? 'center'
    : 'top'

  const textBlack = [
    'building-resilience-and-improving-sustainable-livelihood-skills-of-vulnerable-idphost-women-in-luuq-district',
  ].includes(params.slug)

  return (
    <>
      <section
        className={`bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-48 ${
          image ? 'text-white' : 'text-black'
        } relative h-[50vh]`}
      >
        <div className='container mx-auto px-4 md:px-6 z-50 absolute top-1/2 -translate-y-1/2'>
          <div className='max-w-3xl mx-auto'>
            <div className={`space-y-4 ${textBlack ? 'text-black' : ''}`}>
              <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                {itemData?.title}
              </h1>
              <div className='flex items-center space-x-4 '>
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
        {image && (
          <BlurImage
            src={itemData?.coverImage || itemData?.image}
            alt={itemData?.title}
            className={`inset-0 w-full h-full object-cover object-${objectPosition}`}
            priority
            fill
          />
        )}
      </section>

      <div className='container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20'>
        <Markdown className='prose prose-gray mx-auto dark:prose-invert lg:max-w-3xl'>
          {itemData?.content}
        </Markdown>
      </div>

      <Footer />
    </>
  )
}
