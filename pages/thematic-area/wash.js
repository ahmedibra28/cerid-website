/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Wash = () => {
  const wash = '/thematics/wash.png'
  const cleaning = '/thematics/cleaning.png'
  const schoolgirls = '/thematics/schoolgirls.png'
  return (
    <div className='container'>
      <h1 className='mt-2'>Water, sanitation, and Hygiene (WASH)</h1>
      <p>
        Water, sanitation, and Hygiene (WASH) project is multiple joint response
        initiatives for Disaster and Conflict effected communities by the
        Norwegian Foreign Affairs, Norwegian Church Aid (NCA) and Centre for
        Research and Integrated Development (CeRID).
      </p>

      <div className='row gy-3'>
        <div className='col-md-6 col-12'>
          <figure className='figure'>
            <img
              src={wash}
              alt='Water Supply System in WADJIR IDP camp'
              className='img-fluid rounded figure-img'
            />
            <figcaption className='figure-caption'>
              Water Supply System in WADJIR IDP camp
            </figcaption>
          </figure>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p>
            Sustainable water supply aims to contribute to increased equitable
            and sustainable access to, and use of, safe water and basic
            sanitation services.
          </p>
          <p className='fst-italic'>
            Sustainable water supply project in Luuq town, Gedo region has been
            established in 2020, and provides clean and safe water to over 2,000
            households in the town.
          </p>
          <p>
            <strong> Environmental sanitation</strong> is a solid waste
            management and income generating activity through cash for work for
            over 50 households in Luuq town.
          </p>
        </div>
      </div>

      <div className='row gy-3'>
        <div className='col-md-6 col-12'>
          <figure className='figure'>
            <img
              src={cleaning}
              alt='View of cleaning campaign in Luuq town'
              className='img-fluid rounded figure-img'
            />
            <figcaption className='figure-caption'>
              View of cleaning campaign in Luuq town
            </figcaption>
          </figure>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p>
            <strong> Community-based environmental cleaning campaign</strong> is
            an employment creation and health hazard reduction project in Luuq
            town. The project’s aim is to reduce environment pollution, water
            contamination, and increase agricultural (livestock and fish)
            production. This project created 70 short-term employments from
            2,100 working days for female headed households.
          </p>
          <p>
            <strong> Emergency WASH supplies: </strong> Based on WASH cluster
            recommendations, this project provides WASH supplies to 200 targeted
            IDPS and vulnerable host community households.
          </p>
        </div>
      </div>

      <div className='row gy-3'>
        <div className='col-md-6 col-12'>
          <figure className='figure'>
            <img
              src={schoolgirls}
              alt='schoolgirls focus group discussion on inclusive leaning and empowering girls'
              className='img-fluid rounded figure-img'
            />
            <figcaption className='figure-caption'>
              Schoolgirls focus group discussion on inclusive leaning and
              empowering girls
            </figcaption>
          </figure>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p>
            <strong>
              {' '}
              Inclusive learning, empowering girls, and community awareness
              project
            </strong>{' '}
            aims to fulfill the convention on the Rights of the Child. It
            empowers girls to go to school while in their adolescence age. The
            project trains and targets 3,200 school age girls and adult women to
            come to school during their menstruation, and advocates availability
            of sanitation and washroom facilities in schools.
          </p>
          <p>
            Although WASH programme primarily targets WASH activities, the
            programme also highly contributes reduced vulnerability and
            increased resilience of the poor households.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Wash
