import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import HomePage from '../components/home'

function Home({ posts, careers }) {
  return (
    <div>
      <Head>
        <title>CeRID | Centre for Research & Integrated Development</title>
        <meta
          property='og:title'
          content='CeRID | Centre for Research & Integrated Development'
          key='title'
        />
      </Head>
      <HomePage posts={posts} careers={careers} />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const postsFiles = fs.readdirSync(path.join('posts'))
  const posts = postsFiles.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  const careersFiles = fs.readdirSync(path.join('careers'))
  const careers = careersFiles.map((filename) => {
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
      posts: posts.sort(sortByDate),
      careers: careers.sort(sortByDate),
    },
  }
}
