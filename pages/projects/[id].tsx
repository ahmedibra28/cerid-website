import React from 'react'
import PostDetails from '@/components/PostDetails'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PostProp } from '@/types'

interface Props {
  post: PostProp
  key: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of posts from the API
  const res = await fetch(
    'https://api.cerid.so/wp-json/wp/v2/posts?per_page=100'
  )
  const posts = await res.json()

  // Generate the paths for each post
  const paths = posts.map((post: PostProp) => ({
    params: { id: post.id.toString() },
  }))
  return { paths, fallback: false }
}

// @ts-ignore
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id

  // Fetch the data for the specific post using the ID from the URL
  const res = await fetch(`https://api.cerid.so/wp-json/wp/v2/posts/${id}`)
  const post = await res.json()
  return { props: { post } }
}

const ProjectDetails: NextPage<Props> = ({ post }) => {
  return <PostDetails post={post} />
}

export default ProjectDetails
