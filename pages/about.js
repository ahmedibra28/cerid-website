import React from 'react'
// import Image from 'next/image'
import {
  FaBullseye,
  FaCheckCircle,
  FaHandsHelping,
  FaLowVision,
  FaTasks,
} from 'react-icons/fa'
import Meta from '../components/Meta'

const About = () => {
  const design = () => (
    <div className='card border-0 shadow'>
      <FaLowVision className='card-img-top fs-1 text-success' />
      <div className='card-body'>
        <h5 className='card-title fw-bold text-center'>Design</h5>
        <p className='card-text'>
          CeRID envisions peaceful and self-reliant communities in the Horn of
          Africa region.
        </p>
      </div>
    </div>
  )

  const development = () => (
    <div className='card border-0 shadow'>
      <FaBullseye className='card-img-top fs-1 text-success' />
      <div className='card-body'>
        <h5 className='card-title fw-bold text-center'>Development</h5>
        <p className='card-text'>
          CeRID’s mission is to act as an agent of change for peaceful and
          self-reliant communities through implementation of programmes in
          education and skills development, environment and NRM, economic
          empowerment and livelihoods, WASH, peace building and conflict
          transformation, and equity and women empowerment.
        </p>
      </div>
    </div>
  )

  const marketing = () => (
    <div className='card border-0 shadow'>
      <FaHandsHelping className='card-img-top fs-1 text-success' />
      <div className='card-body'>
        <h5 className='card-title fw-bold text-center'>Marketing</h5>
        <p className='card-text'>
          Creativity, Equity, Relevance, Integrity, Dignity.
        </p>
      </div>
    </div>
  )

  return (
    <>
      <Meta title='About Us' />
      <div id='about' className='container my-2'>
        <h4 className='fw-light display-6 text-center pt-3 text-success'>
          About Us
        </h4>

        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <p className='text-center'>
              Centre for Research and Integrated Development (CeRID) is a
              non-governmental organization that was founded in 2005. It is
              registered in Somalia and Kenya and has field operation offices in
              Mogadishu, Jubbaland and Southwest States of Somalia. CeRID has
              its headquarters in Belet-Hawa town bordering Mandera Kenya from
              where it provides programme and operational support to all
              offices.
            </p>
          </div>
        </div>

        <div className='row mt-4 g-3'>
          <div className='col-lg-4 col-md-6 col-12'>{design()}</div>
          <div className='col-lg-4 col-md-6 col-12'>{development()}</div>
          <div className='col-lg-4 col-md-6 col-12'>{marketing()}</div>
        </div>
      </div>
    </>
  )
}

export default About
