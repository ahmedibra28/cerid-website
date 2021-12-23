import React from 'react'
// import Image from 'next/image'

const Header = () => {
  return (
    <div className='container my-5'>
      <div className='row py-5'>
        <div className='col-md-10 col-12 my-auto text-center mx-auto'>
          <h1 className='fw-light display-1 '>
            <span className='text-success'>Ce</span>ntre for
            <span className='text-success'> R</span>esearch &
            <span className='text-success'> I</span>ntegrated
            <span className='text-success'> D</span>evelopment
          </h1>
          <h4 className='fw-bold display-1 text-success'>CeRID</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
