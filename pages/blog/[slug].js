import React from 'react'
import Head from 'next/head'
import moment from 'moment'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Contact from '../../components/Contact'
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
                <h5 className='card-title fs-1 fw-bold text-primary'>
                  {frontmatter.title}
                </h5>
                <p className='card-text'>
                  {frontmatter.hashTag.map((hash) => (
                    <button
                      key={hash}
                      className='btn btn-light btn-sm me-2 text-muted'
                    >
                      #{hash}
                    </button>
                  ))}
                </p>
                <label className='text-muted fst-italic fw-light'>
                  Posted on {moment(frontmatter.createdAt).format('MMM Do YY')}
                </label>{' '}
                -{' '}
                <label className='text-muted fst-italic fw-light'>
                  Original published at {frontmatter.author}
                </label>{' '}
                {/* {frontmatter && frontmatter.image && ( */}
                <div className='image-wrapper my-3'>
                  <img
                    alt={frontmatter.image}
                    src={frontmatter.image}
                    className='img-fluid w-100'
                  />
                </div>
                {/* )} */}
                <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
              </div>
            </div>
          </div>
        </>
      </div>
      <Contact />
    </>
  )
}

export default PostDetails

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: { frontmatter, slug, content },
  }
}
