import useApi from '@/api'
import { PostProp } from '@/types'
import { useEffect } from 'react'
import Message from '@/pages/components/Message'
import Spinner from '@/pages/components/Spinner'
import HomeIndex from '@/pages/components/home'
import Contact from '@/pages/components/Contact'

export default function Home() {
  const getPosts = useApi({
    key: ['posts'],
    url: 'posts?per_page=100',
  }).get

  const posts: PostProp[] = getPosts?.data

  // get posts using api call and filter them by category

  useEffect(() => {
    if (getPosts?.isSuccess) {
      // console.log(posts?.map((post: PostProp) => post.categories?.[0]))
    }
  }, [getPosts?.isSuccess, posts])

  return (
    <>
      <HomeIndex />

      <Contact />

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <div className='text-center'></div>
      )}
    </>
  )
}
