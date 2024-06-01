'use client'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import BlurImage from '@/components/blur-image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function HeroCarousel({ images }: { images: string[] }) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
        duration: 50,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className='mx-auto aspect-video rounded-xl object-cover sm:w-full lg:order-last lg:lg:aspect-square shadow-2xl'
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <BlurImage
              height={550}
              width={550}
              alt='Hero'
              className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:lg:aspect-square'
              src={image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='text-brand hidden lg:flex' />
      <CarouselNext className='text-brand hidden lg:flex' />
    </Carousel>
  )
}
