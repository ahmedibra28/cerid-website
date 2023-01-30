import fs from 'fs'
import React from 'react'
import Head from 'next/head'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'
import Link from 'next/link'
import moment from 'moment'
import {
  FaClock,
  FaHourglassStart,
  FaMapMarkerAlt,
  FaStream,
} from 'react-icons/fa'
import Meta from '../../components/Meta'

const Career = ({ careers }) => {
  return (
    <>
      <Meta title='Careers' />
      <div div className='container'>
        <h4 className='fw-light display-6 text-center pt-3 text-success'>
          Careers
        </h4>

        <div className='row gy-3'>
          {careers &&
            careers.length > 0 &&
            careers.map((career) => (
              <div key={career.slug} className='col-lg-4 col-md-6 col-12'>
                <div className='card border-0 mb-2 shadow-sm position-relative overflow-hidden'>
                  <div
                    className={`position-absolute z-5 px-5 py-1 text-center text-white ${
                      moment().format() >
                      moment(career?.frontmatter?.end).format()
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
                    <Link
                      className='text-decoration-none text-dark'
                      href={`/careers/${career.slug}`}
                    >
                      {/* {moment().format() >
                        moment(career?.frontmatter?.end).format() && (
                        <span>Expired</span>
                      )} */}
                      <h5 className='card-title text-success text-center'>
                        {career.frontmatter.title}
                      </h5>
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
    </>
  )
}

export default Career

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('careers'))
  const careers = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('careers', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  return {
    props: {
      careers: careers.sort(sortByDate),
    },
  }
}
