import React from 'react'
// import Image from 'next/image'
import {
  FaBullseye,
  FaCheckCircle,
  FaHandsHelping,
  FaLowVision,
  FaTasks,
} from 'react-icons/fa'
import Meta from '../components/Meta'

const About = () => {
  const design = () => (
    <div className='card border-0 shadow'>
      <FaLowVision className='card-img-top fs-1 text-success' />
      <div className='card-body'>
        <h5 className='card-title fw-bold text-center'>Vision</h5>
        <p className='card-text'>
          A peaceful and self-reliant communities in the Horn of Africa region.
        </p>
      </div>
    </div>
  )

  const development = () => (
    <div className='card border-0 shadow'>
      <FaBullseye className='card-img-top fs-1 text-success' />
      <div className='card-body'>
        <h5 className='card-title fw-bold text-center'>Mission</h5>
        <p className='card-text'>
          To act as an agent of change for peaceful and self-reliant communities
          through implementation of its various programs on research and
          analysis, education and skills development, environment and natural
          resource management, livelihoods and economic empowerment, WASH,
          peacebuilding and conflict transformation, and equity and women
          empowerment.
        </p>
      </div>
    </div>
  )

  const marketing = () => (
    <div className='card border-0 shadow'>
      <FaHandsHelping className='card-img-top fs-1 text-success' />
      <div className='card-body'>
        <h5 className='card-title fw-bold text-center'>Core Values</h5>
        <p className='card-text'>
          The core values of CeRID are driven from its acronym and include
          <strong> creativity</strong>, <strong>equity</strong>,
          <strong> relevance</strong>, <strong>integrity</strong>, and
          <strong> dignity</strong>.
        </p>
      </div>
    </div>
  )

  return (
    <>
      <Meta title='About Us' />
      <div id='about' className='container my-2'>
        <h4 className='fw-light display-6 text-center pt-3 text-success'>
          About Us
        </h4>

        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <p className='text-start'>
              Centre for Research and Integrated Development (CeRID) is a
              non-governmental, non-profit organization founded and became
              operational in 2010. The organization is registered in Kenya,
              Somalia, and Ethiopia. We have has grown from a small grassroots
              Organization to a vibrant and promising international NGO because
              of our presence in the Horn of Africa partnered with international
              NGO, and local communities, respective zonal authorities and
              donors in a clear and transparent way while engaging them in all
              project periods from inception, evaluation and striving for an
              enabling environment for the beneficiaries to meet their essential
              needs. We Empower Communities to live Dignified Lives We achieve
              this through promotion of access to education, sustainable
              livelihood, environmental stewardship, and human rights.
            </p>
            <p>
              The bulk of the projects that we have undertaken fall under
              Professional Services and Development, Educational, Humanitarian
              and Emergency Response so as to alleviate human suffering and
              avail quick and timely emergency response. In doing so, the
              organization has implemented diverse projects ranging from,
              Research programs, smart agriculture and Livelihood to Water,
              Sanitation and Hygiene (WASH) and Conflict Resolution to Peace
              Building and most importantly not forgetting our vulnerable women
              and girls where we have our fully functional Gender based violence
              centers and we have vocational training tailor made for them. We
              strive to lead in
            </p>
            <ul className='list-group list-group-flush list-group-numbered'>
              <li className='list-group-item ps-0'>
                Research on issues affecting lives and livelihoods including
                climate change, resilience, food security, education, peace,
                security and development and productive sector (crop, livestock,
                fishery). CeRID also specialized on community capacity building.
                The institution undertakes commissioned studies and research to
                support its investing for impact approach that supports CeRID
                founded education institution (Sayid Mohamed Technical Education
                Collegue) which focuses on Technical and Vocational Training for
                most disadvantaged youth in the region.
              </li>
              <li className='list-group-item ps-0'>
                Reduce Poverty in the regions through building strong centers of
                development to grow the adjacent school community as well as the
                satellite surrounding communities. encouraging enterprise and
                building reliable and sustainable mechanisms with strong value
                chain management systems to increase livelihoods
              </li>
              <li className='list-group-item ps-0'>
                Reverse the Impact of Climate Change through regenerative
                programs and strong support systems to manage and fight droughts
                and floods with the integration of water, food and energy.
                Involving the community and farmers inland restoration practices
                and rainwater harvesting that bring higher yield and long-term
                impact to livelihoods.
              </li>
              <li className='list-group-item ps-0'>
                End Hunger through a strong food programs in the communities
                with school farms and cooperatives, where all {`stakeholders'`}{' '}
                needs are taken into account and clean water and nutritious
                fresh produce is available for growth, consumption and market.
              </li>
              <li className='list-group-item ps-0'>
                Ensure Safety and Security through providing basic
                infrastructure for communities to become established, grow and
                prosper. Ending the need to forage for basic human necessities
                of water, food and shelter in other community lands leading to
                skirmishes. As well as ensuring children are able to transition
                in their education and remain engaged inbuilding their own
                enterprises. Reducing the increase of radicalism.
              </li>
              <li className='list-group-item ps-0'>
                Promote Equality both for communities who have been marginalized
                and genders who lack support. We ensure equal access and support
                to the girl child, building strong programs to support her
                health, finances and academics all the way through the end of
                education and into womanhood. Women have access to building
                their enterprises with micro loans and receiving basic
                education.
              </li>
              <li className='list-group-item ps-0'>
                Education for all through promoting lifelong learning - From
                supportive centers and schools properly managed in knowledge
                transference and capacity building. Engaging youth to grow their
                abilities by working in the industrial park and vocational
                training. Promoting literacy, financial literacy, life skills to
                all members of the community while supporting the cultural
                uniqueness and native language.
              </li>
            </ul>
            <p>
              The organization has its headquarters in Beledxawa, Somalia, and
              registered in Somalia and Kenya, CeRID is largely present in
              Jubaland and Southwest states of Somalia and Mogadishu and
              operates in entire Somalia and neighboring countries in the Horn
              of Africa (HoA) specifically Kenya and Ethiopia
            </p>
          </div>
        </div>

        <div className='row mt-4 g-3'>
          <div className='col-lg-4 col-md-6 col-12'>{design()}</div>
          <div className='col-lg-4 col-md-6 col-12'>{development()}</div>
          <div className='col-lg-4 col-md-6 col-12'>{marketing()}</div>
        </div>
      </div>
    </>
  )
}

export default About
