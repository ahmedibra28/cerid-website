import { PostProp } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = ({ post }: { post: PostProp }) => {
  const url = 'https://api.cerid.so/wp-content/uploads'

  const slides = [
    {
      _id: 1,
      image: `${url}/2023/03/1.jpg`,
      active: 'active',
    },
    {
      _id: 2,
      image: `${url}/2023/02/DSC01310-scaled.jpg`,
      active: '',
    },
    {
      _id: 3,
      image: `${url}/2023/03/3-scaled.jpg`,
      active: '',
    },
    {
      _id: 4,
      image: `${url}/2023/03/4.jpeg`,
      active: '',
    },
  ]
  return (
    <div className='container' id='about-us'>
      <div className='row gy-3 mb-5'>
        <div className='col-lg-6 col-12 my-auto'>
          <div
            className='card-text'
            dangerouslySetInnerHTML={{
              __html: post?.content.rendered?.slice(0, 470) || '',
            }}
          />

          <Link
            href={`/about/${post?.id}`}
            className='btn btn-primary text-light rounded-pill py-3 px-4 mt-5'
          >
            Learn more about us
          </Link>
        </div>
        <div className='col-lg-6 col-12'>
          <div
            id='carouselExampleSlidesOnly'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              {slides.map((slide) => (
                <div
                  key={slide._id}
                  className={`carousel-item ${slide.active}`}
                  style={{ height: 500 }}
                >
                  <Image
                    src={slide.image}
                    width={500}
                    height={500}
                    style={{ objectFit: 'cover', height: 400 }}
                    quality={100}
                    className='d-block w-100'
                    alt='cerid'
                  />
                </div>
              ))}
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleSlidesOnly'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleSlidesOnly'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
