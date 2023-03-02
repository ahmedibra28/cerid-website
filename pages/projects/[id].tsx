import React from 'react'
import Contact from '@/pages/components/Contact'
import Image from 'next/image'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'
import { useRouter } from 'next/router'
import { useApiSingle } from '@/api'
import { PostProp } from '@/types'
import Spinner from '@/pages/components/Spinner'
import Message from '@/pages/components/Message'
import moment from 'moment'
import readingTime from 'reading-time'

const ProjectDetails = () => {
  const router = useRouter()
  const { id } = router.query

  //   @ts-ignore
  const { port, protocol, hostname } =
    typeof window !== 'undefined' && window.location

  const domain = protocol + hostname + (port ? ':' + port : '')

  const getPost = useApiSingle({
    key: ['projects-post'],
    url: `posts/${id}`,
    id: id?.toString(),
  }).getById

  const data: PostProp = getPost?.data

  const avatar = (content: string) => {
    const status = readingTime(content)

    return (
      <div className='d-flex justify-content-start'>
        <div className=''>
          <Image
            src='/logo.png'
            width={37}
            height={37}
            style={{ objectFit: 'cover' }}
            quality={100}
            className='d-block w-100 img-fluid'
            alt='cerid'
          />
        </div>
        <div className='ms-2'>
          <span className='text-uppercase fw-bold'>Cerid</span> <br />
          <div className='text-muted'>
            <small>{moment(data?.date).format('ll')}</small> -{' '}
            <small>{status?.text}</small>
          </div>
        </div>
      </div>
    )
  }

  const shareButtons = () => {
    return (
      <div className='d-flex justify-content-between gap-2'>
        <div>
          <FacebookShareButton url={`${domain}/projects/${id}`}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div>
          <EmailShareButton url={`${domain}/projects/${id}`}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <div>
          <TwitterShareButton url={`${domain}/projects/${id}`}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      {getPost?.isLoading ? (
        <Spinner />
      ) : getPost?.isError ? (
        <Message variant='danger' value={getPost?.error} />
      ) : (
        <div className='row'>
          <div className='col-lg-9 col-md-11 col-12 mx-auto'>
            <div className='d-flex justify-content-between align-items-center'>
              {avatar(data?.content?.rendered || '')}
              {shareButtons()}
            </div>

            {data?.jetpack_featured_media_url && (
              <Image
                src={data?.jetpack_featured_media_url}
                width={500}
                height={500}
                style={{ objectFit: 'cover', height: 500 }}
                quality={100}
                className='d-block w-100 img-fluid mt-3 mb-4'
                alt='cerid'
              />
            )}

            <h1 className='text-uppercase fw-bold text-primary text-center'>
              {data?.title?.rendered}
            </h1>

            <div
              className='card-text'
              dangerouslySetInnerHTML={{
                __html: data?.content.rendered || '',
              }}
            />
          </div>
        </div>
      )}

      <Contact />
    </div>
  )
}

export default ProjectDetails
