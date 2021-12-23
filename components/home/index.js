import Header from './Header'
import About from './About'
import Posts from './Posts'
import Contact from '../Contact'
import Governance from './Governance'
import Strategy from './Strategy'
import Approach from './Approach'
import Partners from './Partners'
import Careers from './Careers'
// import Project from './Project'

export default function HomePage({ posts, careers }) {
  return (
    <>
      <Header />
      <About />
      <Governance />
      <Strategy />
      <Approach />
      {/* <Project /> */}
      <Partners />
      <Posts posts={posts} />
      <Careers careers={careers} />
      <Contact />
    </>
  )
}
