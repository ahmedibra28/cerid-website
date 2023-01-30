import React from 'react'
import Link from 'next/link'

const Project = () => {
  const approaches = [
    {
      _id: 2,
      title: 'ATC Project',
      slug: 'atc-project',
      image: '/projects/atc.png',
      content: (
        <>
          <p>
            Training and mentorship for Teenagers and school-going children on
            agri-business and entrepreneurship in Luuq District
          </p>
        </>
      ),
    },
    {
      _id: 3,
      title: 'Food Production Project',
      slug: 'food-production-project',
      image: '/projects/food.png',
      content: (
        <>
          <p>
            Improving Food Security for Vulnerable IDP and Host Communities is a
            project funded by Development and Peace- Caritas...
          </p>
        </>
      ),
    },
    // {
    //   _id: 1,
    //   title: 'Geel Project',
    //   slug: 'geel-project',
    //   image: '/projects/geel.png',
    //   content: (
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio
    //       odit quae porro hic autem quis sint doloremque sequi ab.
    //     </p>
    //   ),
    // },
  ]
  return (
    <div id='projects' className='container my-5'>
      <h3 className='text-center text-success pt-5'>Current Projects</h3>

      <div className='row'>
        {/* <div className='col-md-10 mx-auto'>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            reiciendis ipsum sunt, corrupti tempora deserunt quae nisi libero,
            eaque, laborum a ea culpa voluptatibus omnis eos ipsam unde amet
            maiores.
          </p>
        </div> */}

        <div className='row mt-2 gy-3'>
          {approaches.map((app) => (
            <div key={app._id} className='col-lg-4 col-md-6 col-12 mx-auto'>
              <div className='card border-0 shadow-sm'>
                <img src={app.image} className='card-img-top' />
                <div className='card-body text-center'>
                  <h5 className='card-title fw-bold text-center'>
                    {app.title}
                  </h5>
                  {app.content}
                  <Link
                    className='btn btn-outline-success'
                    href={`/projects/${app.slug}`}
                  >
                    READ MORE
                  </Link>
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
