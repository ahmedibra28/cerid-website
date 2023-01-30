import Link from 'next/link'
import Meta from '../../components/Meta'

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
      title: 'Livelihood/Resilience',
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
    {
      _id: 4,
      title: 'EDUCATION',
      slug: 'education',
      image: '/thematics/education.png',
      description:
        'CeRID has an over all strategy to contribute to effort to eradicate poverty and promote equitable...',
    },
    // {
    //   _id: 5,
    //   title: 'PARTNERSHIP',
    //   slug: 'partnership',
    //   image: '/thematics/wash.png',
    //   description:
    //     'Partnership project is a joint response initiative under GBV...',
    // },
  ]
  return (
    <>
      <Meta title='Thematic Area' />
      <div id='thematic' className='container my-2'>
        <h4 className='fw-light display-6 text-center pt-3 text-success'>
          Thematic Area
        </h4>

        <div className='row gy-4'>
          {thematics.map((thematic) => (
            <div key={thematic._id} className='col-lg-4 col-md-6 col-12'>
              <div className='card border-0 shadow-sm'>
                <img src={thematic.image} className='card-img-top' />
                <div className='card-body text-center'>
                  <h5 className='card-title text-center'>{thematic.title}</h5>
                  <p className='card-text'>{thematic.description}</p>
                  <Link
                    className='btn btn-outline-success'
                    href={`/thematic-area/${thematic.slug}`}
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Thematic
