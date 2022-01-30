import React from 'react'

const Approach = () => {
  const approaches = [
    {
      _id: 1,
      title: 'Creativity',
      content:
        'We will proactively and deliberately use research to inform our community engagements; we will continuously seek innovative and noble solutions to old and new problems; we will be at the cutting edge of finding new ways and methods of bringing change.',
    },
    {
      _id: 2,
      title: 'Equity',
      content:
        'We endeavor to ensure equitable and fair treatment of women, boys and girls regardless of their age, education level, gender, race, clan, religious affiliation, marginalization status; we believe all people should enjoy their human rights.',
    },
    {
      _id: 3,
      title: 'Relevance',
      content:
        'We always ensure that our work is relevant to the context in which we work; our work meets the needs of our constituency in ways that bring lasting change; we endeavor to ensure that our social actions are benchmarked against national, regional and international standards; we regularly monitor what we do to ensure appropriateness.',
    },
    {
      _id: 4,
      title: 'Integrity',
      content:
        'We are keen to ensure transparency and accountability in everything that we do; we assure highest level of compliance to our stakeholder requirements; we are open and honest in our dealings with communities and take our beneficiaries as key partners in our work. We espouse modesty, trust and uprightness in everything we do.',
    },
    {
      _id: 5,
      title: 'Dignity',
      content:
        'We stand for fair treatment of our staff and others; we check our work methods to ensure we do not bring harm to our beneficiaries and communities; we integrate conflict sensitive approaches while continually seeking to use indigenous and local knowledge. We are keen to ensure our staff and stakeholders espouse and follow international human rights values and instruments.',
    },
  ]
  return (
    <div id='approach' className='container my-5'>
      <h4 className='fw-light display-4 text-center text-success pt-5'>
        Values & Approaches
      </h4>

      <div className='row gy-3'>
        <div className='col-md-10 mx-auto'>
          <p className='text-center'>
            The five core values of CeRID are driven from its acronym and
            include creativity, equity, relevance, integrity and dignity as
            expounded with the value statements below.
          </p>
        </div>

        <div className='row mt-4 gy-3'>
          {approaches.map((app) => (
            <div key={app._id} className='col-lg-4 col-md-6 col-12'>
              <div className='card border-0 shadow-sm'>
                <div className='card-body'>
                  <h5 className='card-title fw-bold text-center'>
                    {app.title}
                  </h5>
                  <p className='card-text'>{app.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Approach
