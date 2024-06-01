import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  BadgeIcon,
  CreativeCommonsIcon,
  EqualIcon,
  LinkIcon,
} from 'lucide-react'
import { getCoreValues } from '@/app/appwrite'
import Markdown from 'react-markdown'

export default async function CoreValues() {
  const core = await getCoreValues()
  const coreData = core?.documents

  return (
    <section className='w-full py-12 md:py-24 lg:py-32' id='core-values'>
      <div className='container grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-6'>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Our Core Values
          </h2>
          <p className='text-gray-500 md:text-xl dark:text-gray-400'>
            The principles that guide our work and shape our culture.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2'>
          {coreData?.map((item) => (
            <Card
              key={item?.title}
              className='rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500'
            >
              <CardContent className='space-y-3 p-6'>
                <div className='flex items-center gap-4'>
                  <div className='bg-gray-100 p-2 rounded-full dark:bg-gray-800'>
                    {item?.title === 'Creativity' && (
                      <CreativeCommonsIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                    )}
                    {item?.title === 'Equity' && (
                      <EqualIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                    )}
                    {item?.title === 'Relevance' && (
                      <LinkIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                    )}
                    {item?.title === 'Integrity' && (
                      <BadgeIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                    )}
                    {item?.title === 'Dignity' && (
                      <BadgeIcon className='w-8 h-8 text-gray-500 dark:text-gray-400' />
                    )}
                  </div>
                  <h3 className='text-2xl font-semibold'>{item?.title}</h3>
                </div>
                <Markdown className='prose text-gray-500 dark:text-gray-400'>
                  {item?.content}
                </Markdown>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
