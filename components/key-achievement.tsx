import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import BlurImage from '@/components/blur-image'
import { getKeyAchievements } from '@/app/appwrite'
import Link from 'next/link'

export default async function KeyAchievement() {
  const achievements = await getKeyAchievements()
  const achievementsData = achievements?.documents

  return (
    <>
      <section className='w-full py-12 md:py-24 lg:py-32' id='key-achievements'>
        <h2 className='container text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>
          Key Achievements
        </h2>

        <div className='container grid items-centers gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-12 grid-rev'>
          {achievementsData.map((item) => (
            <div
              key={item.$id}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <BlurImage
                alt='Thematic Areas 2'
                className='w-full h-48 object-cover'
                height={300}
                src={
                  item?.image ||
                  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                style={{
                  aspectRatio: '500/300',
                  objectFit: 'cover',
                }}
                width={500}
              />
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{item?.title}</h3>
                <p className='text-gray-700 mb-4 line-clamp-5222'>
                  {item?.excerpt}
                </p>
                <Link
                  className='inline-flex items-center text-brand hover:text-green-800 font-medium transition-colors'
                  href={`key-achievement/${item.slug}`}
                >
                  Read More
                  <ArrowRightIcon className='h-5 w-5 ml-2' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
