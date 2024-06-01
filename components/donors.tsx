import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import BlurImage from '@/components/blur-image'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { getDonors } from '@/app/appwrite'

export default async function Donors() {
  const donor = await getDonors()
  const donorData = donor?.documents

  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-white' id='partners'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Our Partners and Donors
            </h2>
            <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              We are grateful for the support and collaboration of our partners
              and donors.
            </p>
          </div>
        </div>
        <div className='mt-12'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className='w-full max-w-6xl mx-auto'
          >
            <CarouselContent>
              {donorData?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className='basis-1/2 md:basis-1/3 lg:basis-1/4'
                >
                  <div className='p-4'>
                    <BlurImage
                      alt='Partner Logo'
                      className='mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                      height={90}
                      src={item?.logo}
                      width={180}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white dark:bg-gray-950/80 dark:hover:bg-gray-800'>
              <ChevronLeftIcon className='h-5 w-5 text-gray-900 dark:text-gray-50' />
            </CarouselPrevious>
            <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white dark:bg-gray-950/80 dark:hover:bg-gray-800'>
              <ChevronRightIcon className='h-5 w-5 text-gray-900 dark:text-gray-50' />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
