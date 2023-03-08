import React from 'react'
import { PostProp } from '@/types'
import CardItem from '../CardItem'

const ThematicAreas = ({ posts }: { posts: PostProp[] }) => {
  return (
    <div className='container py-5' id='thematic-areas'>
      <h2 className='text-primary fw-bold display-4 text-center pb-5'>
        THEMATIC AREAS
      </h2>

      <div className='row gy-4'>
        {posts?.map((item: PostProp) => (
          <div key={item.id} className='col-lg-4 col-md-6 col-12'>
            <CardItem item={item} link='thematic-areas' quality={50} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThematicAreas
