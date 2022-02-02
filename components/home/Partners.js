import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaInstagram } from 'react-icons/fa'

const Partners = () => {
  const carousel = [
    { image: '/partners/somali.png' },
    { image: '/partners/jubaland.png' },
    { image: '/partners/care.png' },
    { image: '/partners/trocaire.png' },
    { image: '/partners/wv.png' },
  ]
  return (
    <div id='partners' className='container my-5'>
      <h3 className='text-center text-success pt-5'>Partners & Donors</h3>

      <div className='row gy-3 mt-3'>
        {carousel.map((c, i) => (
          <div key={i} className='col-lg-2 col-md-4 col-sm-6 mx-auto'>
            <img
              src={c.image}
              alt='image'
              className='card-img top img-fluid h-75'
            />
            {/* {c.image} */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
