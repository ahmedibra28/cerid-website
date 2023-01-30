import Link from 'next/link'
import moment from 'moment'
import { FaHourglassStart, FaStream } from 'react-icons/fa'

const Careers = ({ careers }) => {
  return (
    <div div className='container my-5'>
      <div className='container text-success pt-5'>
        <h3 className='text-center text-success'>Careers</h3>
      </div>

      <div className='row gy-3 mt-3'>
        {careers?.slice(0, 3).map((career) => (
          <div key={career.slug} className='col-lg-4 col-md-6 col-12'>
            <div className='card border-0 mb-2 shadow-sm position-relative overflow-hidden'>
              <div
                className={`position-absolute z-5 px-5 py-1 text-center text-white ${
                  moment().format() > moment(career?.frontmatter?.end).format()
                    ? 'bg-danger'
                    : 'bg-success'
                }`}
                style={{ transform: 'rotate(-45deg)', top: 15, left: -35 }}
              >
                {moment().format() >
                moment(career?.frontmatter?.end).format() ? (
                  <span>Expired</span>
                ) : (
                  <span>New</span>
                )}
              </div>

              <Link href={`/careers/${career.slug}`}>
                <img src='/hiring.jpg' className='card-img-top' />
              </Link>
              <div className='card-body fs-6'>
                <h5 className='card-title text-success text-center'>
                  <Link
                    className='text-decoration-none text-dark'
                    href={`/careers/${career.slug}`}
                  >
                    {career.frontmatter.title}
                  </Link>
                </h5>
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
                    <FaStream className='mb-1' /> {career.frontmatter.category}
                  </label>
                </div>
                <div className='card-text mt-2 text-center'>
                  <Link
                    className='btn btn-outline-success'
                    href={`/careers/${career.slug}`}
                  >
                    READ MORE
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
