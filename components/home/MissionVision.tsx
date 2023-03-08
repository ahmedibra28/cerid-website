import { PostProp } from '@/types'
import React from 'react'

const MissionVision = ({
  mission,
  vision,
}: {
  mission: PostProp
  vision: PostProp
}) => {
  return (
    <div className='container p-5'>
      <div className='row g-5'>
        <div className='col-lg-6 col-md-12 border border-top-0 border-end-0 border-bottom-0 border-primary border-5 shadow-sm py-2'>
          <h1 className='text-primary'>Mission</h1>
          <div
            className='card-text text-secondary'
            dangerouslySetInnerHTML={{
              __html: mission?.content.rendered,
            }}
          />
        </div>
        <div className='col-lg-6 col-md-12 border border-top-0 border-end-0 border-bottom-0 border-primary border-5 shadow-sm py-2'>
          <h1 className='text-primary'>Vision </h1>
          <div
            className='card-text text-secondary'
            dangerouslySetInnerHTML={{
              __html: vision?.content.rendered,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default MissionVision
