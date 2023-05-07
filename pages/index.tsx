import { PostProp } from '@/types'
import HomeIndex from '@/components/home'
import Contact from '@/components/Contact'

import { GetStaticProps, NextPage } from 'next'

interface Props {
  posts: PostProp[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    'https://api.cerid.so/wp-json/wp/v2/posts?per_page=100'
  )
  const data = await res.json()

  return {
    props: { posts: data },
  }
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <HomeIndex posts={posts} />

      <Contact />
    </>
  )
}
export default Home
