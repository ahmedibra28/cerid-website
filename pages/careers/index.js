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
import Contact from '../../components/Contact'
import Meta from '../../components/Meta'

const Career = ({ careers }) => {
  return (
    <>
      <Meta title='Careers' />
      <div div className='container'>
        <div className='container text-primary mb-5 mt-2'>
          <h3 className='text-center display-6 '>Careers</h3>
        </div>

        <div className='row g-3'>
          {careers &&
            careers.length > 0 &&
            careers.map((career) => (
              <div key={career.slug} className='col-md-6 col-12'>
                <div className='card border-0 mb-2 shadow-lg'>
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
      <Contact />
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
