import { PostProp } from '@/types'
import Image from 'next/image'
import React from 'react'

const KeyAchievements = ({ post }: { post: PostProp }) => {
  return (
    <div className='container py-5' id='key-achievements'>
      <h2 className='text-primary fw-bold display-4 text-center pb-5'>
        KEY ACHIEVEMENTS
      </h2>
      <div className='row mt-3'>
        <div className='col-lg-6 col-12'>
          <Image
            src={post?.jetpack_featured_media_url}
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
            quality={100}
            className='d-block w-100 img-fluid'
            alt='cerid'
          />
        </div>
        <div className='col-lg-6 col-12 my-auto'>
          <div
            className='card-text'
            dangerouslySetInnerHTML={{
              __html: post?.excerpt.rendered,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default KeyAchievements
