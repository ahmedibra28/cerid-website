import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getShorts } from '@/app/appwrite'
import Markdown from 'react-markdown'

export default async function MissionVision() {
  const mission = await getShorts('mission')
  const vision = await getShorts('vision')

  const missionData = mission?.documents?.[0]
  const visionData = vision?.documents?.[0]

  return (
    <section className='w-full py-12 md:py-24 lg:py-32' id='about-us'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
          <Card className='flex flex-col justify-center space-y-4 hover:scale-105 duration-700 hover:shadow-2xl'>
            <CardHeader>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                {missionData?.title}
              </h2>
            </CardHeader>
            <CardContent>
              <Markdown className='prose max-w-[600px] text-gray-500 dark:text-gray-400'>
                {missionData?.content}
              </Markdown>
            </CardContent>
          </Card>

          <Card className='flex flex-col justify-center space-y-4 hover:scale-105 duration-700 hover:shadow-2xl'>
            <CardHeader>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                {visionData?.title}
              </h2>
            </CardHeader>
            <CardContent>
              <Markdown className='prose max-w-[600px] text-gray-500 dark:text-gray-400'>
                {visionData?.content}
              </Markdown>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
