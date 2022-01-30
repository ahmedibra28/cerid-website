/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Contact from '../../components/Contact'

const Livelihood = () => {
  const agri = '/thematics/agri.png'
  const targeted = '/thematics/targeted.png'
  const samtec = '/thematics/samtec-atc.png'
  return (
    <div className='container'>
      <h1 className='mt-2'>
        A gri-business entrepreneurship, and food production for improved
        nutrition outcome
      </h1>
      <p>
        Agri-business entrepreneurship, and food production for improved
        nutrition outcome: Sayid Mohamed technical Education College (SaMTEC)’s
        Agriculture Training Centre (ATC) in Luuq in collaboration with Centre
        for Research and Integrated Development (CeRID) provides both
        agriculture extension training and related entrepreneurship and food
        production activities (Figure 1).
      </p>

      <div className='row gy-3'>
        <div className='col-md-6 col-12'>
          <figure className='figure'>
            <img
              src={samtec}
              alt='figure 1'
              className='img-fluid rounded figure-img'
            />
            <figcaption className='figure-caption'>
              Figure 1: SaMTEC’s ATC facilities and demonstration field within
              the campus
            </figcaption>
          </figure>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p>
            Training and mentorship on agri-business and entrepreneurship
            project in Luuq District, Somalia, is a joint venture between
            Trocaire, (CeRID) and SaMTEC which targets school age youth, with an
            overall aim of enabling youth to access to formal and informal
            employments. Female and male youth are trained on Permaculture
            principles, agroecology, Business & Basic computer skills for six
            months. SaMTEC’s ATC has introduced demonstration plots for
            different practical sessions. Trained youth are able to produce
            horticulture crops to access income (Figure 2).
          </p>
        </div>
      </div>

      <div className='row gy-3'>
        <div className='col-md-6 col-12'>
          <figure className='figure'>
            <img
              src={agri}
              alt='figure 2'
              className='img-fluid rounded figure-img'
            />
            <figcaption className='figure-caption'>
              Figure 2: Trained youth on agriculture, harvested their crop from
              the demonstration sites and ready to sell.
            </figcaption>
          </figure>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p>
            Food production to improve nutrition outcomes project in Luuq
            district, Gedo, Somalia, is a joint initiative between Development
            and Peace- Caritas Canada, Trocaire, CeRID and SaMTEC. The aim of
            the project is to strengthen communities’ resilience to cope with
            recurring humanitarian hazards and shocks. The target audience of
            the project are IDPs female headed and vulnerable host community
            households, as well as vulnerable school-age youth. This project
            enables its target beneficiaries to access productive farming land,
            and knowledge and skills on environmentally friendly farming
            practices. Women from IDP households share about one to three
            hectors of farmland with their host community and the harvest are
            shared equally. Target audiences benefit from SaMTEC’s ATC and
            receive tailor-made agriculture training courses to improve the
            uptake of modern and environmentally friendly food production
            techniques
          </p>
        </div>
      </div>

      <div className='row gy-3'>
        <div className='col-md-6 col-12'>
          <figure className='figure'>
            <img
              src={targeted}
              alt='figure 3'
              className='img-fluid rounded figure-img'
            />
            <figcaption className='figure-caption'>
              Figure 3: Targeted female farmers practical sessions on
              environmentally friendly farming practices
            </figcaption>
          </figure>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <p>
            The project also provides one-off livelihood support assets
            including goats, chickens, while poor households are in the lean
            season. To ensure integration between IDPs to the host community,
            revolving loan and saving schemes were initiated by the project
            audience and formed cooperative groups. It is remarkable to
            acknowledge that once IDP households are in the trajectory to become
            resilient community which will in the short term able to access
            their source of food and income, and integrate with farming
            communities in the riverine areas of Gedo region (Figure 3)
          </p>
        </div>
      </div>

      <Contact />
    </div>
  )
}

export default Livelihood
