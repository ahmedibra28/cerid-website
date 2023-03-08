import React from 'react'
import { PostProp } from '@/types'
import CardItem from '../CardItem'

const Projects = ({ posts }: { posts: PostProp[] }) => {
  return (
    <div className='container py-5' id='projects'>
      <h2 className='text-primary fw-bold display-6 text-center pb-5'>
        CURRENT CERID PROJECTS
      </h2>

      <div className='row gy-4'>
        {posts?.map((item: PostProp) => (
          <div key={item.id} className='col-lg-3 col-md-6 col-12'>
            <CardItem item={item} link='projects' quality={50} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
