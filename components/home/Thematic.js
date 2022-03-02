import Link from 'next/link'

const Thematic = () => {
  const thematics = [
    {
      _id: 1,
      title: 'Protection',
      slug: 'protection',
      image: '/thematics/protection.png',
      description:
        'Women & Girls Safe Spaces (WGSS) project is a joint response...',
    },
    {
      _id: 2,
      title: 'Livelihood',
      slug: 'livelihood',
      image: '/thematics/livelihood.png',
      description: 'Agri-business entrepreneurship, and food production for...',
    },
    {
      _id: 3,
      title: 'WASH',
      slug: 'wash',
      image: '/thematics/wash.png',
      description:
        'Water, sanitation, and Hygiene (WASH) project is multiple...',
    },
    {
      _id: 4,
      title: 'EDUCATION',
      slug: 'education',
      image: '/thematics/education.png',
      description:
        'Education and Skills Development (ESD) project is a joint response...',
    },
  ]
  return (
    <>
      <div id='thematic' className='container my-2'>
        <h3 className='text-center text-success pt-5'>Thematic Area</h3>

        <div className='row mt-3 gy-3'>
          {thematics.map((thematic) => (
            <div key={thematic._id} className='col-lg-3 col-md-6 col-12'>
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
    </>
  )
}

export default Thematic
