import Link from 'next/link'
import Meta from '../../components/Meta'
import Contact from '../../components/Contact'

const Thematic = () => {
  const thematics = [
    {
      _id: 1,
      title: 'Protection',
      slug: 'protection',
      image: '/thematics/protection.png',
      description:
        'Women & Girls Safe Spaces (WGSS) project is a joint response initiative under GBV...',
    },
    {
      _id: 2,
      title: 'Livelihood',
      slug: 'livelihood',
      image: '/thematics/livelihood.png',
      description:
        'Agri-business entrepreneurship, and food production for improved nutrition outcome...',
    },
    {
      _id: 3,
      title: 'WASH',
      slug: 'wash',
      image: '/thematics/wash.png',
      description:
        'Water, sanitation, and Hygiene (WASH) project is multiple joint response initiatives...',
    },
  ]
  return (
    <>
      <Meta title='Thematic Area' />
      <div id='thematic' className='container my-2'>
        <h4 className='fw-light display-6 text-center pt-3 text-success'>
          Thematic Area
        </h4>

        <div className='row gy-3'>
          {thematics.map((thematic) => (
            <div key={thematic._id} className='col-lg-4 col-md-6 col-12'>
              <div className='card border-0 shadow-sm'>
                <img src={thematic.image} className='card-img-top' />
                <div className='card-body text-center'>
                  <h5 className='card-title text-center'>{thematic.title}</h5>
                  <p className='card-text'>{thematic.description}</p>
                  <Link href={`/thematic-area/${thematic.slug}`}>
                    <a className='btn btn-outline-success'> READ MORE</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </>
  )
}

export default Thematic
