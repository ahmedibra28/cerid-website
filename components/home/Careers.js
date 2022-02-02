import Link from 'next/link'
import moment from 'moment'
import { FaHourglassStart, FaStream } from 'react-icons/fa'

const Careers = ({ careers }) => {
  return (
    <div div className='container'>
      <div className='container text-success mt-2'>
        <h3 className='text-center text-success'>Careers</h3>
      </div>

      <div className='row gy-3 mt-3'>
        {careers &&
          careers.slice(0, 3).map((career) => (
            <div key={career.slug} className='col-lg-4 col-md-6 col-12'>
              <div className='card border-0 mb-2 shadow-sm'>
                <Link href={`/careers/${career.slug}`}>
                  <a>
                    <img src='/hiring.jpg' className='card-img-top' />
                  </a>
                </Link>
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
                  </p>

                  <div className='card-text text-center'>
                    <label className='text-muted fst-italic fw-light'>
                      <FaHourglassStart className='mb-1' />{' '}
                      {moment(career.frontmatter.start).format('MMM Do YY')}
                    </label>{' '}
                    <br />
                    <label className='text-muted fst-italic fw-light'>
                      <FaStream className='mb-1' />{' '}
                      {career.frontmatter.category}
                    </label>
                  </div>
                  <div className='card-text mt-2 text-center'>
                    <Link href={`/careers/${career.slug}`}>
                      <a className='btn btn-outline-success'> READ MORE</a>
                    </Link>
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
