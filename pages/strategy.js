import Link from 'next/link'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Strategy = () => {
  return (
    <div id='governance' className='container'>
      <h3 className='text-center text-success py-3'>Strategy</h3>

      <div className='row gy-3'>
        <div className='col-md-7 col-12 mx-auto'>
          <p>
            The organization is currently running four programmes which are;
            education and skills development, WASH – Water, Sanitation & Health,
            NRM – Natural Resource Management and Livelihoods & Environment and
            Social Justice. Under the education and skills development project,
            the organization is currently supporting 17 primary schools, one
            secondary school and SAMTEC (www.samtec.so), the only TVET –
            Technical and Vocational Education and Training center which has
            assisted over 3,000 youths and women to acquire vocational and
            technical skills. The vocational skills training programme was
            expanded from the Gedo region to Kismayo town in 2016 following the
            finalization of SAMTEC strategic plan and later to Bardere town.
          </p>
        </div>
        <div className='col-md-7 col-12 mx-auto'>
          <p>
            The NRM and livelihoods has been focusing on capacity building on
            NRM, support to cash for work, tree planting, regeneration of
            natural resources, and promotion of farming technologies such as
            kitchen gardens, farmer training on GAP, promotion of savings and
            loans and other IGAs and use of cash-based interventions to improve
            on communal assets. In addition, the livelihoods and NRM programs
            supports advocacy initiatives around environmental protection and
            encourages farmers to focus on farming as a business. Under the
            environment and social justice programme, the focus was on peace
            building and conflict transformation through peace building
            initiatives such as peace clubs, peace outreaches, media peace
            advocacy and use of community structures. The WASH programme has
            increased access to water, sanitation and hygiene and operates in
            the Gedo region districts of Belet-Hawa and Luuq.
          </p>
        </div>

        <div className='col-md-7 col-12 mx-auto text-center mt-5'>
          <div className='btn-group'>
            <Link href={`/governance`}>
              <a className='btn btn-outline-success'>
                <FaArrowCircleLeft className='mb-1' /> GOVERNANCE
              </a>
            </Link>
            <Link href={`/#core-values`}>
              <a className='btn btn-outline-success ms-3'>
                <FaArrowCircleRight className='mb-1' /> CORE VALUES
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strategy
