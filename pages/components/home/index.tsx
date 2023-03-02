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
        <Governance
          post={getPosts?.data?.find(
            (post: PostProp) => post.categories?.[0] === 6
          )}
        />
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <div className='bg-light'>
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
        <ThematicAreas
          posts={getPosts?.data?.filter(
            (post: PostProp) => post.categories?.[0] === 4
          )}
        />
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        getPosts?.data?.filter((post: PostProp) => post.categories?.[0] === 3)
          ?.length > 0 && (
          <div className='bg-light'>
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
        <Projects
          posts={getPosts?.data?.filter(
            (post: PostProp) => post.categories?.[0] === 13
          )}
        />
      )}

      {getPosts?.isLoading ? (
        <Spinner />
      ) : getPosts?.isError ? (
        <Message variant='danger' value={getPosts?.error} />
      ) : (
        <Partners
          posts={getPosts?.data?.filter(
            (post: PostProp) => post.categories?.[0] === 8
          )}
        />
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
