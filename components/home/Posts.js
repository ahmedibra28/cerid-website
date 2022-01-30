import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const Posts = ({ posts }) => {
  return (
    <div div className='container'>
      <div className='container text-success mb-5 mt-2'>
        <h3 className='text-center display-6 '>Blog News</h3>
      </div>

      <div className='row g-3'>
        {posts &&
          posts.map((post) => (
            <div key={post.slug} className='col-lg-4 col-md-6 col-12'>
              <div className='card border-0 mb-2 shadow-lg'>
                {post.frontmatter && post.frontmatter.image !== undefined && (
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
                      <h5 className='card-title text-success'>
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
  )
}

export default Posts
