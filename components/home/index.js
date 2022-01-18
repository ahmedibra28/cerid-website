import Header from './Header'
import AboutHome from './AboutHome'
// import Posts from './Posts'
import Contact from '../Contact'
import Governance from './Governance'
import Strategy from './Strategy'
import Approach from './Approach'
import Partners from './Partners'
import Careers from './Careers'
import Project from './Project'

export default function HomePage({ posts, careers }) {
  return (
    <>
      <Header />
      <AboutHome />
      <Governance />
      <Strategy />
      <Approach />
      <Project />
      <Partners />
      {/* <Posts posts={posts} /> */}
      <Careers careers={careers} />
      <Contact />
    </>
  )
}
