import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getShorts } from '@/app/appwrite'
import Markdown from 'react-markdown'
import HeroCarousel from '@/components/hero-carousel'

export default async function HeroSection() {
  const hero = await getShorts('hero')
  const heroData = hero?.documents?.[0]

  const images = [
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a040d002b83e82d75/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a05b50001c872bed8/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a06ee000ae0bb09df/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a094c002b118177c2/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a0d550021665762db/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a0d4e001d49918ba0/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a0e20001dd3886a07/view?project=65905182817b88c986bf',
  ]

  return (
    <section
      className='w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-brand text-white'
      id='home'
    >
      <div className='container px-4 md:px-6 w-[95%]'>
        <div className='grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Centre for Research and Integrated Development
              </h1>
              <Markdown className='prose mt-8 max-w-[600px] text-gray-300 dark:text-gray-400 md:text-xl'>
                {heroData?.content}
              </Markdown>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='/#contact-us' passHref>
                <Button size='lg'> Contact Now </Button>
              </Link>
              <Link href='/about-us' passHref>
                <Button size='lg' variant='outline' className='bg-transparent'>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <HeroCarousel images={images} />
        </div>
      </div>
    </section>
  )
}
