import React from 'react'
import Link from 'next/link'

const Governance = () => {
  return (
    <div className='pb-2' style={{ backgroundColor: '#e6e6e6' }}>
      <div id='governance' className='container my-5'>
        <h3 className='text-center text-success pt-5'>Government</h3>

        <div className='row gy-3'>
          <div className='col-md-6 col-12'>
            <img src='/government.png' className='img-fluid' />
          </div>
          <div className='col-md-6 col-12'>
            <p className='card-body'>
              The governance and management structure of CeRID is composed of
              two levels: The Board of Directors (BoD) level and Executive
              Management level. The Board of Trustee is the highest body of the
              organization that sets the strategic direction of the institution,
              the financial policies, the human resources and the administrative
              policies, rules, regulations as well as the code of conducts
              regarding its mission.
            </p>
            <Link href={`/government`}>
              <a className='btn btn-outline-success'> READ MORE</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Governance
