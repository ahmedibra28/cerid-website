import { PostProp } from '@/types'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Partners = ({ posts }: { posts: PostProp[] }) => {
  interface CarouselItem {
    name: string
    image: string
  }
  interface Responsive {
    superLargeDesktop: {
      breakpoint: { max: 4000; min: 3000 }
      items: number
    }
    desktop: {
      breakpoint: { max: 3000; min: 992 }
      items: number
    }
    tablet: {
      breakpoint: { max: 992; min: 768 }
      items: number
    }
    largeMobile: {
      breakpoint: { max: 768; min: 576 }
      items: number
    }
    mobile: {
      breakpoint: { max: 576; min: 0 }
      items: number
    }
  }

  const carousel: CarouselItem[] = posts?.map((post) => ({
    name: post.title.rendered,
    image: post?.jetpack_featured_media_url,
  }))
  // [
  //   { name: 'Somalia', image: '/partners/somalia.png' },
  //   { name: 'NCA', image: '/partners/nca.png' },
  //   { name: 'Chemonics', image: '/partners/chemonics.png' },
  //   { name: 'WVI ', image: '/partners/WVI.png' },
  //   { name: 'Trocaire', image: '/partners/trocaire.png' },
  //   { name: 'IGAD', image: '/partners/igad.png' },
  //   { name: 'USAID', image: '/partners/usaid.png' },
  //   { name: 'Finland', image: '/partners/finland.png' },
  // ]

  const responsive: Responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 4,
    },
    largeMobile: {
      breakpoint: { max: 768, min: 576 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
    },
  }

  return (
    <div id='partners' className='container-fluid py-5'>
      <h2 className='text-primary fw-bold display-4 text-center pb-5'>
        PARTNERS & DONORS
      </h2>
      <div className='row gy-3 mt-3 my-auto'>
        <Carousel
          // @ts-ignore
          responsive={responsive}
          infinite={true}
          itemClass='shadow-sm text-center'
          autoPlay={true}
          arrows={false}
        >
          {carousel?.map((partner, index: number) => (
            <div
              key={index}
              className='col-auto m-auto bg-white d-flex justify-content-center align-items-center h-100'
            >
              <Image
                width={130}
                height={130}
                src={partner?.image}
                alt={partner?.image}
                className='img-fluid'
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Partners
