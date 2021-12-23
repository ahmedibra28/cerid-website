import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import { FaHourglassStart, FaMapMarkerAlt, FaStream } from 'react-icons/fa'

const Careers = ({ careers }) => {
  return (
    <div div className='container'>
      <div className='container text-success mb-5 mt-2'>
        <h3 className='text-center display-6 '>Careers</h3>
      </div>

      <div className='row g-3'>
        {careers &&
          careers.slice(0, 4).map((career) => (
            <div key={career.slug} className='col-md-6 col-12'>
              <div className='card border-0 mb-2 shadow-lg'>
                <div className='card-body fs-6'>
                  <Link href={`/careers/${career.slug}`}>
                    <a className='text-decoration-none text-dark'>
                      <h5 className='card-title text-success text-center'>
                        {career.frontmatter.title}
                      </h5>
                    </a>
                  </Link>
                  <p className='card-text text-center'>
                    {career.frontmatter.subTitle}
                    <br />
                    <label className='text-muted py-2 fst-italic fw-light'>
                      <FaMapMarkerAlt className='mb-1' />{' '}
                      {career.frontmatter.location}
                    </label>
                  </p>

                  <div className='card-text d-flex justify-content-between'>
                    <label className='text-muted fst-italic fw-light'>
                      <FaHourglassStart className='mb-1' />{' '}
                      {moment(career.frontmatter.start).format('MMM Do YY')}
                    </label>
                    <label className='text-muted fst-italic fw-light'>
                      <FaStream className='mb-1' />{' '}
                      {career.frontmatter.category}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Careers
