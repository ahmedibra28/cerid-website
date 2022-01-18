import React from 'react'
// import Image from 'next/image'

const Header = () => {
  return (
    <div className='mb-5'>
      {/* <div className='row py-5'>
        <div className='col-md-10 col-12 my-auto text-center mx-auto'>
          <h1 className='fw-light display-1 '>
            <span className='text-success'>Ce</span>ntre for
            <span className='text-success'> R</span>esearch &
            <span className='text-success'> I</span>ntegrated
            <span className='text-success'> D</span>evelopment
          </h1>
          <h4 className='fw-bold display-1 text-success'>CeRID</h4>
        </div>
      </div> */}

      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='3'
            aria-label='Slide 4'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='4'
            aria-label='Slide 5'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src='local/agri1.png' className='d-block w-100' alt='agri1' />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold'>Agriculture</h5>
              <p className='display-6 fw-light'>
                Belet-hawa agricultural green house
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='local/food1.png'
              className='d-block w-100'
              alt='food training'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold'>Women In Agriculture</h5>
              <p className='display-6 fw-light'>
                Women farmers training on saving and loan methodology
              </p>
            </div>
          </div>

          <div className='carousel-item'>
            <img src='local/agri4.png' className='d-block w-100' alt='agri2' />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold'>Second slide label</h5>
              <p className='display-6 fw-light'>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='local/food2.png'
              className='d-block w-100'
              alt='food training'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold'>Food Production</h5>
              <p className='display-6 fw-light'>
                provision of farm inputs to the women farmers
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src='local/agri3.png' className='d-block w-100' alt='agri3' />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold'>Third slide label</h5>
              <p className='display-6 fw-light'>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
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
          data-bs-target='#carouselExampleCaptions'
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
  )
}

export default Header
