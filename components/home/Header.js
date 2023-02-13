const Header = () => {
  return (
    <div className='mb-3'>
      <div
        id='carouselExampleCaptions'
        className='carousel slide h-100'
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
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='5'
            aria-label='Slide 6'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='slides/agr.png'
              className='d-block w-100'
              alt='agri1'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
            {/* <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold strokeme'>Agriculture</h5>

              <p className='display-6 fw-light strokeme'>
                Belethawa agricultural green house
              </p>
            </div> */}
          </div>
          <div className='carousel-item'>
            <img
              src='slides/ATC.png'
              className='d-block w-100'
              alt='food training'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
            {/* <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold strokeme'>
                Women In Agriculture
              </h5>
              <p className='display-6 fw-light strokeme'>
                Women farmers training on saving and loan methodology
              </p>
            </div> */}
          </div>

          <div className='carousel-item'>
            <img
              src='slides/educ.png'
              className='d-block w-100'
              alt='agri2'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
            {/* <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold strokeme'>ATC Center</h5>
              <p className='display-6 fw-light strokeme'>
                Students preparing raised beds to plant vegetables at ATC CENTER
              </p>
            </div> */}
          </div>
          <div className='carousel-item'>
            <img
              src='slides/food.png'
              className='d-block w-100'
              alt='food training'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
            {/* <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold strokeme'>Food Production</h5>
              <p className='display-6 fw-light strokeme'>
                provision of farm inputs to the women farmers
              </p>
            </div> */}
          </div>
          <div className='carousel-item'>
            <img
              src='slides/Jazeera IPD.png'
              className='d-block w-100'
              alt='primary student'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
            {/* <div className='carousel-caption d-none d-md-block'>
              <h5 className='display-1 fw-bold strokeme'>Jaziira IPD Luuq</h5>
              <p className='display-6 fw-light strokeme'>
                This one agricultural field visit for primary school children of
                Jaziira IDP Luuq{' '}
              </p>
            </div> */}
          </div>
          <div className='carousel-item'>
            <img
              src='slides/women.png'
              className='d-block w-100'
              alt='primary student'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
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
