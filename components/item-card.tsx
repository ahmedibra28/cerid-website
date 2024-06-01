import React from 'react'
import BlurImage from '@/components/blur-image'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export default function ItemCard({ item }: { item: any }) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
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
        <p className='text-gray-700 mb-4 line-clamp-3'>{item?.content}</p>
        <Link
          className='inline-flex items-center text-brand hover:text-green-800 font-medium transition-colors'
          href={item?.slug}
        >
          Read More
          <ArrowRightIcon className='h-5 w-5 ml-2' />
        </Link>
      </div>
    </div>
  )
}
