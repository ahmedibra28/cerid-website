import { PostProp } from '@/types'
import React from 'react'

const Item = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className='col-md-4 col-12'>
      <div className='card border-0 shadow rounded-0'>
        <div className='card-body'>
          <h5 className='card-title text-primary text-center fw-bold text-uppercase'>
            {title}
          </h5>{' '}
          <hr />
          <div
            className='card-text'
            dangerouslySetInnerHTML={{
              __html: description || '',
            }}
          />
        </div>
      </div>
    </div>
  )
}

const CoreValues = ({ posts }: { posts: PostProp[] }) => {
  const itemHeader = posts?.find(
    (post) => post?.title.rendered === 'Core Values'
  )

  const items = posts?.filter((post) => post?.title.rendered !== 'Core Values')

  return (
    <div className='container py-5' id='core-values'>
      <h2 className='text-primary fw-bold display-4 text-center py-5'>
        CORE VALUES
      </h2>
      <div className='row gy-3'>
        <div className='col-lg-7 col-md-10 col-12 mx-auto text-center'>
          <div
            className='card-text'
            dangerouslySetInnerHTML={{
              __html: itemHeader?.content.rendered || '',
            }}
          />
        </div>
        <div className='col-12 mx-auto'></div>
        {items?.map((item) => (
          <Item
            key={item?.id}
            title={item?.title.rendered}
            description={item?.content.rendered}
          />
        ))}
      </div>
    </div>
  )
}

export default CoreValues
