import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import {
  FaBullseye,
  FaCheckCircle,
  FaHandsHelping,
  FaLowVision,
  FaTasks,
} from 'react-icons/fa'

const AboutHome = () => {
  return (
    <div id='about' className='container my-5'>
      <h3 className='text-center text-success pt-5'>About CeRID</h3>

      <div className='row'>
        <div className='col-md-6 col-12 my-auto'>
          <p className=''>
            Centre for Research and Integrated Development (CeRID) is a
            non-governmental organization that was founded in 2005. It is
            registered in Somalia and Kenya and has field operation offices in
            Mogadishu, Jubbaland and Southwest States of Somalia. <br /> CeRID
            has its headquarters in Belet-Hawa town bordering Mandera Kenya from
            where it provides programme and operational support to all offices.
          </p>
          <Link href='/about'>
            <a className='btn btn-success btn-lg mt-3'> READ MORE </a>
          </Link>
        </div>

        <div className='col-md-6 col-12 my-auto'>
          <img src='/training.jpg' className='img-fluid' alt='training' />
        </div>
      </div>
    </div>
  )
}

export default AboutHome
