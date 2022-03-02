import Header from './Header'
import AboutHome from './AboutHome'
// import Posts from './Posts'
import Governance from './Governance'
import Strategy from './Strategy'
import Values from './Values'
import Partners from './Partners'
import Careers from './Careers'
import Project from './Project'
import Thematic from './Thematic'

export default function HomePage({ posts, careers }) {
  return (
    <>
      <Header />
      <AboutHome />
      <Governance />
      <Strategy />
      <Values />
      <Thematic />
      <Project />
      <Partners />
      {/* <Posts posts={posts} /> */}
      <Careers careers={careers} />
    </>
  )
}
