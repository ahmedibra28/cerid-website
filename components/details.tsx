import React from 'react'

import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import Link from 'next/link'
import BlurImage from './blur-image'

export default function Details() {
  return (
    <>
      <section className='bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto'>
            <div className='space-y-4'>
              <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                The Joke Tax Chronicles
              </h1>
              <div className='flex items-center space-x-4 text-gray-500 dark:text-gray-400'>
                <div>
                  <span className='font-medium'>John Doe</span>
                  <span> - </span>
                  <time dateTime='2023-05-16'>May 16, 2023</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12'>
        <div className='prose prose-gray mx-auto dark:prose-invert'>
          <p>
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <p>
            The king thought long and hard, and finally came up with a brilliant
            plan: he would tax the jokes in the kingdom.
          </p>
          <p>
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king&apos;s pillow,
            in his soup, even in the royal toilet. The king was furious, but he
            couldn&apos;t seem to stop Jokester.
          </p>
          <BlurImage
            alt='Blog post image'
            className='rounded-lg object-cover'
            height={400}
            src='/placeholder.svg'
            style={{
              aspectRatio: '800/400',
              objectFit: 'cover',
            }}
            width={800}
          />
          <p>
            And then, one day, the people of the kingdom discovered that the
            jokes left by Jokester were so funny that they couldn&apos;t help
            but laugh. And once they started laughing, they couldn&apos;t stop.
          </p>
          <h2>The Joke Tax</h2>
          <p>
            The king&apos;s subjects were not amused. They grumbled and
            complained, but the king was firm:
          </p>
          <ul>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <p>
            As a result, people stopped telling jokes, and the kingdom fell into
            a gloom. But there was one person who refused to let the king&apos;s
            foolishness get him down: a court jester named Jokester.
          </p>
        </div>
        <div className='space-y-8'>
          <Card>
            <CardHeader>
              <CardTitle>Related Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-start space-x-4'>
                  <BlurImage
                    alt='Related post image'
                    className='rounded-lg object-cover'
                    height={80}
                    src='/placeholder.svg'
                    style={{
                      aspectRatio: '80/80',
                      objectFit: 'cover',
                    }}
                    width={80}
                  />
                  <div className='space-y-1'>
                    <h3 className='text-lg font-medium'>
                      <Link href='#'>The Rise of Joke Inflation</Link>
                    </h3>
                    <p className='text-gray-500 dark:text-gray-400 text-sm'>
                      How the Joke Tax led to a surge in joke prices.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <BlurImage
                    alt='Related post image'
                    className='rounded-lg object-cover'
                    height={80}
                    src='/placeholder.svg'
                    style={{
                      aspectRatio: '80/80',
                      objectFit: 'cover',
                    }}
                    width={80}
                  />
                  <div className='space-y-1'>
                    <h3 className='text-lg font-medium'>
                      <Link href='#'>The Jokester&apos;s Revenge</Link>
                    </h3>
                    <p className='text-gray-500 dark:text-gray-400 text-sm'>
                      Jokester&apos;s plan to overthrow the Joke Tax regime.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <Link
                  className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'
                >
                  Humor
                </Link>
                <Link
                  className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'
                >
                  Politics
                </Link>
                <Link
                  className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'
                >
                  Economics
                </Link>
                <Link
                  className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'
                >
                  History
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
