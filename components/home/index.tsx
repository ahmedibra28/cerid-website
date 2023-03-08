import Hero from './Hero'
import Partners from './Partners'
import KeyAchievements from './KeyAchievements'
import Governance from './Governance'
import CoreValues from './CoreValues'
import ThematicAreas from './ThematicAreas'
import Projects from './Projects'
import Careers from './Careers'
import useApi from '@/api'
import Spinner from '../Spinner'
import Message from '../Message'
import { PostProp } from '@/types'
import MissionVision from './MissionVision'

const HomeIndex = () => {
  const getPosts = useApi({
    key: ['posts'],
    url: 'posts?per_page=100',
  }).get

  return (
    <div>
      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <Hero
          post={getPosts?.data?.find(
            (post: PostProp) => post.categories?.[0] === 9
          )}
        />
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <div className='bg-light'>
          <MissionVision
            mission={getPosts?.data?.find(
              (post: PostProp) => post.categories?.[0] === 10
            )}
            vision={getPosts?.data?.find(
              (post: PostProp) => post.categories?.[0] === 11
            )}
          />
        </div>
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <div className=''>
          <KeyAchievements
            post={getPosts?.data?.find(
              (post: PostProp) => post.categories?.[0] === 7
            )}
          />
        </div>
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <div className='bg-light'>
          <Governance
            post={getPosts?.data?.find(
              (post: PostProp) => post.categories?.[0] === 6
            )}
          />
        </div>
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <div className=''>
          <CoreValues
            posts={getPosts?.data?.filter(
              (post: PostProp) => post.categories?.[0] === 5
            )}
          />
        </div>
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <div className='bg-light'>
          <ThematicAreas
            posts={getPosts?.data?.filter(
              (post: PostProp) => post.categories?.[0] === 4
            )}
          />
        </div>
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        getPosts?.data?.filter((post: PostProp) => post.categories?.[0] === 3)
          ?.length > 0 && (
          <div className=''>
            <Careers
              posts={getPosts?.data?.filter(
                (post: PostProp) => post.categories?.[0] === 3
              )}
            />
          </div>
        )
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <div className=''>
          <Projects
            posts={getPosts?.data?.filter(
              (post: PostProp) => post.categories?.[0] === 13
            )}
          />
        </div>
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <div className=''>
          <Partners
            posts={getPosts?.data?.filter(
              (post: PostProp) => post.categories?.[0] === 8
            )}
          />
        </div>
      )}
    </div>
  )
}

export default HomeIndex
// export defualt {
//   Hero,
//   Partners,
//   KeyAchievements,
//   Governance,
//   CoreValues,
//   ThematicAreas,
//   Projects,
// }
