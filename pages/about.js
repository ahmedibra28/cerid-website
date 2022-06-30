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
        <h5 className='card-title fw-bold text-center'>Vision</h5>
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
        <h5 className='card-title fw-bold text-center'>Mission</h5>
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
        <h5 className='card-title fw-bold text-center'>Core Values</h5>
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
            <p className='text-start'>
              Centre for Research and Integrated Development (CeRID) is a
              non-governmental, non-profit organization founded and became
              operational in 2010. CeRID’s institutional focus grounded on five
              Strategic Priority Goals/Pillars as follows:
            </p>
            <ul className='list-group list-group-flush list-group-numbered'>
              <li className='list-group-item ps-0'>
                Research on issues affecting lives and livelihoods including
                climate change, resilience, food security, education, peace,
                security and development and productive sector (crop, livestock,
                fishery). CeRID also specialized on community capacity building.
                The institution undertakes commissioned studies and research to
                support its investing for impact approach that supports CeRID
                founded education institution (Sayid Mohamed Technical Education
                Collegue) which focuses on Technical and Vocational Training for
                most disadvantaged youth in the region.
              </li>
              <li className='list-group-item ps-0'>
                Promoting climate smart agriculture practices and climate change
                adaptation through research, introduction of agriculture value
                chain to reduce food insecurity and enhance resilience building
                in the Horn of Africa
              </li>
              <li className='list-group-item ps-0'>
                Contributing to effort to eradicate poverty, promoting equitable
                economic and social development, human rights, productivity and
                income through knowledge and skill enhancement.
              </li>
              <li className='list-group-item ps-0'>
                Contributing to effort to alleviate immediate human suffering
                and strengthen the resilience and self, recovery capacity of
                drought and conflict affected communities, including IDPs and
                hosting communities, and,
              </li>
              <li className='list-group-item ps-0'>
                Advancing and where necessary building strategic partnership
                with Sustainable Development Goals (SDGs) partners to achieve
                meaningful impact on social, economic, and environmental
                development in support of the Agenda 2030 for Sustainable
                Development.
              </li>
            </ul>
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
