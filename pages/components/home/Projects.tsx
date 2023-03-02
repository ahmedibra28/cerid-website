import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PostProp } from '@/types'

const items = [
  {
    _id: 1,
    title: 'Food Security',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: '/hero/1.jpg',
    link: '/',
  },
]
const Projects = ({ posts }: { posts: PostProp[] }) => {
  const CardItem = (item: PostProp) => {
    return (
      <div
        className='card'
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Image
          width={200}
          height={200}
          src={item?.jetpack_featured_media_url}
          style={{
            objectFit: 'cover',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          className='card-img-top w-100'
          alt={item.title.rendered}
        />
        <div className='card-body text-center'>
          <h5 className='card-title text-uppercase text-primary fw-bold'>
            {item.title.rendered}
          </h5>
          <div
            className='card-text'
            dangerouslySetInnerHTML={{
              __html: item?.excerpt.rendered?.slice(0, 80),
            }}
          />
          <Link
            href={`/projects/${item.id}`}
            className='btn btn-primary text-light rounded-pill'
          >
            Read more
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='container py-5' id='projects'>
      <h2 className='text-primary fw-bold display-4 text-center pb-5'>
        CURRENT PROJECTS
      </h2>

      <div className='row gy-4'>
        {posts?.map((item: PostProp) => (
          <div key={item.id} className='col-lg-4 col-md-6 col-12'>
            <CardItem {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
