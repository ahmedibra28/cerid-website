import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'

const Governance = () => {
  return (
    <div id='governance' className='container'>
      <h3 className='text-center text-success py-3'>Government</h3>

      <div className='row gy-3'>
        <div className='col-md-7 col-12 mx-auto'>
          <p>
            The governance and management structure of CeRID is composed of two
            levels: The Board of Directors (BoD) level and Executive Management
            level. The Board of Trustee is the highest body of the organization
            that sets the strategic direction of the institution, the financial
            policies, the human resources and the administrative policies,
            rules, regulations as well as the code of conducts regarding its
            mission. The BoDs are responsible for the overall accountability,
            transparency and effectiveness of the organization. They also
            oversee Corporate Social Responsibilities (CSR) and do fund raising
            activities to sustain the institutions.
          </p>
        </div>
        <div className='col-md-7 col-12 mx-auto'>
          <p>
            The Executive Management Team consists of employed professional team
            who are responsible to the Board of Directors for the program and
            operational management of the organization. The management team is
            responsible to carry out, control and implement the organizational
            day-to-day activities at their respective levels. The management
            team is headed by an Executive Director who has the delegated
            authority to represent the organization and deal with the local,
            international and donor bodies in order to help the programs of the
            organization. The Management team are responsible to the BoDs on
            transparency, accountability and effective implementation of
            organizational strategies and policies. They report to BoDs at least
            one a year for full compliance of requirements.
          </p>
        </div>
        <div className='col-md-7 col-12 mx-auto text-center mt-5'>
          <div className='btn-group'>
            <Link href={`/strategy`}>
              <a className='btn btn-outline-success'>
                <FaArrowCircleRight className='mb-1' /> STRATEGY
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Governance
