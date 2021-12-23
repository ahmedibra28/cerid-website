import fs from 'fs'
import React from 'react'
import Head from 'next/head'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'
import Link from 'next/link'
import moment from 'moment'
import Contact from '../../components/Contact'

const Blog = ({ posts }) => {
  return (
    <>
      <div div className='container'>
        <div className='container text-primary mb-5 mt-2'>
          <Head>
            <title>Blog News</title>
            <meta property='og:title' content='Blog News' key='title' />
          </Head>
          <h3 className='text-center display-6 '>Blog News</h3>
        </div>

        <div className='row g-3'>
          {posts &&
            posts.length > 0 &&
            posts.map((post) => (
              <div key={post.slug} className='col-md-4 col-12'>
                <div className='card border-0 mb-2 shadow-lg'>
                  {post.frontmatter && post.frontmatter.image && (
                    <div>
                      <Link href={`/blog/${post.slug}`}>
                        <a>
                          <img
                            alt={post.frontmatter.image}
                            src={post.frontmatter.image}
                            className='card-img-top img-fluid'
                          />
                        </a>
                      </Link>
                    </div>
                  )}

                  <div className='card-body fs-6'>
                    <label className='text-muted fst-italic fw-light'>
                      {post.frontmatter.author}
                    </label>{' '}
                    -{' '}
                    <label className='text-muted fst-italic fw-light'>
                      {moment(post.frontmatter.createdAt).format('MMM Do YY')}
                    </label>
                    <Link href={`/blog/${post.slug}`}>
                      <a className='text-decoration-none text-dark'>
                        <h5 className='card-title text-primary'>
                          {post.frontmatter.title}
                        </h5>
                      </a>
                    </Link>
                    <p className='card-text'>
                      {post.frontmatter.caption}
                      <br />

                      {post &&
                        post.frontmatter &&
                        post.frontmatter.hashTag.map((hash) => (
                          <button
                            key={hash}
                            className='btn btn-light btn-sm me-2 text-muted'
                          >
                            #{hash}
                          </button>
                        ))}
                    </p>
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

export default Blog

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
