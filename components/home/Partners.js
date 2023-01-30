// import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaInstagram } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Partners = () => {
  const carousel = [
    { image: '/partners/somali.png' },
    { image: '/partners/jubaland.png' },
    { image: '/partners/care.png' },
    { image: '/partners/trocaire.png' },
    { image: '/partners/nord.png' },
    { image: '/partners/sdc.png' },
    { image: '/partners/usaid.png' },
  ]

  const responsive = {
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
    <div id='partners' className='container my-5'>
      <h3 className='text-center text-success pt-5'>Partners & Donors</h3>

      <div className='row gy-3 mt-3'>
        <Carousel
          responsive={responsive}
          infinite={true}
          itemClass='shadow-sm text-center'
          autoPlay={true}
          arrows={false}
        >
          {carousel?.map((partner) => (
            <div key={partner._id} className='col-auto mx-auto'>
              <img
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

{
  /* <img
              src={c.image}
              alt='image'
              className='card-img top img-fluid h-75'
            /> */
}
