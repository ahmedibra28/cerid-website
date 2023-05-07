import Hero from './Hero'
import Partners from './Partners'
import KeyAchievements from './KeyAchievements'
import Governance from './Governance'
import CoreValues from './CoreValues'
import ThematicAreas from './ThematicAreas'
import Projects from './Projects'
import Careers from './Careers'
import { PostProp } from '@/types'
import MissionVision from './MissionVision'

const HomeIndex = ({ posts }: { posts: PostProp[] }) => {
  return (
    <div>
      <Hero post={posts?.find((post) => post.categories?.[0] === 9)} />

      <div className='bg-light'>
        <MissionVision
          mission={posts?.find((post) => post.categories?.[0] === 10)}
          vision={posts?.find((post) => post.categories?.[0] === 11)}
        />
      </div>

      <div className=''>
        <KeyAchievements
          post={posts?.find((post) => post.categories?.[0] === 7)}
        />
      </div>

      <div className='bg-light'>
        <Governance post={posts?.find((post) => post.categories?.[0] === 6)} />
      </div>

      <div className=''>
        <CoreValues
          posts={posts?.filter((post) => post.categories?.[0] === 5)}
        />
      </div>

      <div className='bg-light'>
        <ThematicAreas
          posts={posts?.filter((post) => post.categories?.[0] === 4)}
        />
      </div>

      {posts?.filter((post) => post.categories?.[0] === 3)?.length > 0 && (
        <div className=''>
          <Careers
            posts={posts?.filter((post) => post.categories?.[0] === 3)}
          />
        </div>
      )}

      <div className=''>
        <Projects
          posts={posts?.filter((post) => post.categories?.[0] === 13)}
        />
      </div>

      <div className=''>
        <Partners posts={posts?.filter((post) => post.categories?.[0] === 8)} />
      </div>
    </div>
  )
}

export default HomeIndex
