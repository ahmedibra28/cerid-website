/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ProtectionWGSS = () => {
  const skills = '/thematics/protection.png'
  const peer = '/thematics/peer.png'
  const wgss = '/thematics/wgss-center-luuq.png'
  return (
    <div className='container'>
      <h1 className='mt-2'>Women & Girls Safe Spaces (WGSS) Project</h1>
      <p>
        Women & Girls Safe Spaces (WGSS) project is a joint response initiative
        under GBV respond to the crisis in Somalia program funded by Norwegian
        Foreign Affairs through Norwegian Church Aid and implemented by Centre
        for research and Integrated Development (CeRID) in Luuq Gedo Jubbaland,
        Somalia
      </p>

      <div className='row gy-3'>
        <div className='col-md-6 col-12'>
          <figure className='figure'>
            <img
              src={wgss}
              alt='WGSS Center in Luuq Secondary School'
              className='img-fluid rounded figure-img'
            />
            <figcaption className='figure-caption'>
              WGSS Center in Luuq Secondary school
            </figcaption>
          </figure>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p className='fw-bold'>
            Women and Girls Safe spaces (WGSS) in Sinai Primary and Luuq
            Secondary schools as entry points for Access to services and
            information.
          </p>
          <p>
            The purpose of WGSS is to <strong> EMPOWER</strong> women and girls
            to use their <strong> VOICES</strong> and access the{' '}
            <strong>SERVICES</strong> and information they require to live safe
            and <strong> DIGNIFIED </strong>lives and be <strong> SAFE </strong>
            from harm.
          </p>
        </div>
      </div>

      <div className='row gy-3'>
        <div className='col-md-6 col-12'>
          <figure className='figure'>
            <img
              src={skills}
              alt='Life skills session in Sinai School'
              className='img-fluid rounded figure-img'
            />
            <figcaption className='figure-caption'>
              Life skills session in Sinai School
            </figcaption>
          </figure>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p className='fw-bold'>
            Life skills-based education & recreational activities to 200
            Adolescent Girls and Women
          </p>
          <p>
            Activities that build psychosocial & interpersonal skills to help
            protect themselves from violence and lead a healthy & productive
            life (structured/non structured). Appropriate sessions for W&Gs on
            communication skills, leadership and empowerment and selfprotection.
            Basic awareness on key information related to GBV prevention and
            response and mitigation of risks is provided. Recreational
            activities are arranged after consulting with Women Gs, and based on
            their requests/what they enjoy, while avoiding gender stereotypes
          </p>
        </div>
      </div>

      <div className='row gy-3'>
        <div className='col-md-6 col-12'>
          <figure className='figure'>
            <img
              src={peer}
              alt='WGSS Center in Luuq Secondary School'
              className='img-fluid rounded figure-img'
            />
            <figcaption className='figure-caption'>
              Peer consoling and case management seasons in Luuq secondary
              School
            </figcaption>
          </figure>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p className='fw-bold'>Case Management and psychosocial Support</p>
          <p>
            Case management and PSS activities that promotes psychosocial
            wellbeing are conducted regularly, 4 dedicated and trained PSS staff
            are available in the safe spaces during working hours and A clear
            referral pathway that is established ALL staff are familiar with.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProtectionWGSS
