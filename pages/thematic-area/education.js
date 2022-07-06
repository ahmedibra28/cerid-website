/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Education = () => {
  const agri = '/thematics/agri.png'
  const targeted = '/thematics/targeted.png'
  const samtec = '/thematics/samtec-atc.png'
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 col-md-8 col-12 mx-auto'>
          <h1 className='mt-2'>Education</h1>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            CeRID has an over all strategy to contribute to effort to eradicate
            poverty and promote equitable economic and social development, human
            rights, productivity and income through knowledge and skill
            enhancement. To achieve this strategic goal, CeRID works with and
            through Sayid Mohamed Technical Education College (SaMTEC) to
            enhance acquisition of modern knowledge, Technical and Vocational
            Skills Training (TVET) and technologies, and improve educational
            attainment for target community members to improve productivity and
            income and create inclusive societies.CeRID in collaboration with
            SaMTEC's Agriculture Training Centre (ATC) in Luuq provides both
            agriculture extension training and related entrepreneurship and food
            production activities and has an outcome of improved nutrition,
            agri-business entrepreneurship, and food production.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education
