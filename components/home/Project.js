import React from 'react'

const Project = () => {
  const approaches = [
    {
      _id: 2,
      title: 'ATC Project',
      image: '/projects/atc.png',
      content: (
        <>
          <p>
            Training and mentorship for Teenagers and school-going children on
            agri-business and entrepreneurship in Luuq District, Somalia is a
            project funded by Kindermissionwerk through Trocaire and implemented
            by CERID. The overall goal of the project is to contribute to
            increased employability for school dropout teenagers in Luuq
            District. Specifically, the project aims to
          </p>
          <ul>
            <li>
              Increase access to employment and business opportunities for the
              Luuq ATC graduates
            </li>
            <li>
              Increase the participation of teenagers in food production, and
              introduce formal training to teenagers and school going children
              in Luuq ATC centre
            </li>
            <li>
              Increase the capacity of CERID as a local partner in providing
              high quality and localized development and humanitarian services
              and good to vulnerable children in Gedo
            </li>
          </ul>
          <p>
            The project targets out of school teenagers’ (both boys and girls)
            to be enrolled as regular trainees and specific targets seasons for
            school going children. The training is conducted at Luuq
            Agricultural training centre under Sayed Mohamed technical education
            college SaMTEC campus in Luuq
          </p>
        </>
      ),
    },
    {
      _id: 3,
      title: 'Food Production Project',
      image: '/projects/food.png',
      content: (
        <>
          <p>
            Improving Food Security for Vulnerable IDP and Host Communities is a
            project funded by Development and Peace- Caritas Canada through
            Trocaire partnership with Centre for Research and Integrated
            Development (CERID) is implemented in Luuq District Somalia. The
            project targets 100 vulnerable women (and their households) from IDP
            and host communities in Luuq district, as well as 90 students of
            agriculture. The project was started with the goal of sustaining the
            gains made in the pilot phase of a food production project supported
            by Trócaire. Generally, the project aims to strengthen the
            resilience of communities in Gedo so that they are able to cope with
            recurring humanitarian shocks and stresses.
          </p>
          <h6>Expected results </h6>
          <ul>
            <li>
              Improved nutrition outcomes for targeted children Under- 5 and
              pregnant and lactating women from IDP and host communities.
            </li>
            <li>Improved food security for target households.</li>
            <li>
              Improved knowledge on food production by project participants,
              both targeted women, and students of the Luuq ATC.
            </li>
          </ul>
          <p>
            The target beneficiaries are engaged in a range of activities to
            improve food production and access to nutritious food to curb
            malnutrition. These include provision of agricultural inputs
            including diverse crop seeds, trainings on environmentally sound
            food production techniques, cash for work initiative, livelihood
            support and informal financial services through formation of
            community- based savings and loan groups. In addition, 90 young
            students from the Luuq Agricultural Training Centre are expected to
            benefit from the hands-on experience acquired from an attachment
            programme with the farming groups.
          </p>
        </>
      ),
    },
    {
      _id: 1,
      title: 'Geel Project',
      image: '/projects/geel.png',
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio
          odit quae porro hic autem quis sint doloremque sequi ab. Ab eaque
          blanditiis vel molestiae dolorem facere debitis nobis ullam. Quo non
          voluptates pariatur dolorum laboriosam est, iste esse laudantium magni
          quidem. Inventore debitis incidunt iure. Repudiandae, amet
          reprehenderit ut consequatur illum dolores doloribus nesciunt quasi
          dolor saepe minus nemo.
        </p>
      ),
    },
  ]
  return (
    <div id='project' className='container my-5'>
      <h4 className='fw-light display-4 text-center text-success pt-5'>
        Current Projects
      </h4>

      <div className='row'>
        {/* <div className='col-md-10 mx-auto'>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            reiciendis ipsum sunt, corrupti tempora deserunt quae nisi libero,
            eaque, laborum a ea culpa voluptatibus omnis eos ipsam unde amet
            maiores.
          </p>
        </div> */}

        <div className='row mt-4 g-3'>
          {approaches.map((app) => (
            <div key={app._id} className='col-md-6 col-12'>
              <div className='card border-0 shadow'>
                <img src={app.image} className='card-img-top' />
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

export default Project
