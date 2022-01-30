import React from 'react'
import Head from 'next/head'
import moment from 'moment'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import {
  FaClock,
  FaHourglassStart,
  FaMapMarkerAlt,
  FaStream,
} from 'react-icons/fa'
import Meta from '../../components/Meta'

const PostDetails = ({ frontmatter, content }) => {
  return (
    <>
      <div className='container'>
        <>
          <Meta title={frontmatter.title} />
          <div className='row'>
            <div className='col-md-9 col-12 mx-auto'>
              <div className='card-body'>
                <h5 className='card-title fs-1 fw-bold text-primary text-center'>
                  {frontmatter.title}
                </h5>
                <h6 className='text-center text-primary text-muted fw-light fs-5'>
                  {frontmatter.subTitle}
                </h6>
                <h6 className='text-center py-2 text-primary text-muted fw-light fs-5'>
                  <FaClock className='mb-1' /> {frontmatter.duration}
                </h6>
                <h6 className='text-center py-2 text-muted fw-light fs-6'>
                  <FaMapMarkerAlt className='mb-1' /> {frontmatter.location}
                </h6>
                <div className='card-text d-flex justify-content-between'>
                  <label className='text-muted fst-italic fw-light'>
                    <FaHourglassStart className='mb-1' />{' '}
                    {moment(frontmatter.start).format('MMM Do YY')}
                  </label>
                  <label className='text-muted fst-italic fw-light'>
                    <FaStream className='mb-1' /> {frontmatter.category}
                  </label>
                </div>{' '}
                <hr />
                <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  )
}

export default PostDetails

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('careers'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('careers', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: { frontmatter, slug, content },
  }
}
