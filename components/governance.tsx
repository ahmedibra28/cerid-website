import { getShorts } from '@/app/appwrite'
import BlurImage from '@/components/blur-image'
import React from 'react'
import Markdown from 'react-markdown'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Governance() {
  const governance = await getShorts('governance')
  const governanceData = governance?.documents?.[0]

  return (
    <section
      className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
      id='governance'
    >
      <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 grid-rev'>
        <BlurImage
          height={550}
          width={550}
          alt='CeRID Organizational Chart'
          className='mx-auto lg:aspect-square overflow-hidden rounded-xl object-cover sm:w-full'
          src='https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />

        <div className=''>
          <h1 className='text-3xl text-center font-bold tracking-tight sm:text-4xl md:text-5xl'>
            {governanceData?.title}
          </h1>

          <Markdown className='prose mt-8 text-gray-500 dark:text-gray-400'>
            {governanceData?.content}
          </Markdown>

          <Link href='/governance' passHref>
            <Button className='mt-8' size='lg' variant='outline'>
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
