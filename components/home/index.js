import Header from './Header'
import AboutHome from './AboutHome'
// import Posts from './Posts'
import Governance from './Governance'
// import Strategy from './Strategy'
import Values from './Values'
import Partners from './Partners'
import Careers from './Careers'
import Project from './Project'
import Thematic from './Thematic'
import Achievement from './Achievement'

export default function HomePage({ posts, careers }) {
  return (
    <>
      <Header />
      <AboutHome />
      <div className='pb-2' style={{ backgroundColor: '#e6e6e6' }}>
        <Achievement />
      </div>
      <Governance />
      {/* <Strategy /> */}
      <div className='pb-2' style={{ backgroundColor: '#e6e6e6' }}>
        <Values />
      </div>
      <Thematic />
      <div className='pb-2' style={{ backgroundColor: '#e6e6e6' }}>
        <Project />
      </div>
      <Partners />
      {/* <Posts posts={posts} /> */}
      <div className='pb-2' style={{ backgroundColor: '#e6e6e6' }}>
        <Careers careers={careers} />
      </div>
    </>
  )
}
