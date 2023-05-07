import { PostProp } from '@/types'
import Link from 'next/link'
import React from 'react'

const Governance = ({ post }: { post?: PostProp }) => {
  return (
    <div className='container py-5' id='governance'>
      <div className='container'>
        <h2 className='text-primary fw-bold display-4 text-center pb-5'>
          GOVERNANCE
        </h2>
        <div className='row mt-3'>
          <div className='col-lg-7 col-md-10 col-12 my-auto text-center mx-auto'>
            <div
              className='card-text'
              dangerouslySetInnerHTML={{
                __html: post?.excerpt.rendered || '',
              }}
            />

            <Link
              href={`/governance/${post?.id}`}
              className='btn btn-primary rounded-pill text-light py-3 px-4 mt-5'
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Governance
