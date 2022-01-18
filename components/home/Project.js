import React from 'react'

const Project = () => {
  const approaches = [
    {
      _id: 1,
      title: 'Geel Project',
      image: '/projects/geel.png',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio odit quae porro hic autem quis sint doloremque sequi ab. Ab eaque blanditiis vel molestiae dolorem facere debitis nobis ullam. Quo non voluptates pariatur dolorum laboriosam est, iste esse laudantium magni quidem. Inventore debitis incidunt iure. Repudiandae, amet reprehenderit ut consequatur illum dolores doloribus nesciunt quasi dolor saepe minus nemo.',
    },
    {
      _id: 2,
      title: 'ATC Project',
      image: '/projects/atc.png',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio odit quae porro hic autem quis sint doloremque sequi ab. Ab eaque blanditiis vel molestiae dolorem facere debitis nobis ullam. Quo non voluptates pariatur dolorum laboriosam est, iste esse laudantium magni quidem. Inventore debitis incidunt iure. Repudiandae, amet reprehenderit ut consequatur illum dolores doloribus nesciunt quasi dolor saepe minus nemo.',
    },
    {
      _id: 3,
      title: 'Food Production Project',
      image: '/projects/food.png',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio odit quae porro hic autem quis sint doloremque sequi ab. Ab eaque blanditiis vel molestiae dolorem facere debitis nobis ullam. Quo non voluptates pariatur dolorum laboriosam est, iste esse laudantium magni quidem. Inventore debitis incidunt iure. Repudiandae, amet reprehenderit ut consequatur illum dolores doloribus nesciunt quasi dolor saepe minus nemo.',
    },
  ]
  return (
    <div id='project' className='container my-5'>
      <h4 className='fw-light display-4 text-center text-success pt-5'>
        Current Projects
      </h4>

      <div className='row'>
        <div className='col-md-10 mx-auto'>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            reiciendis ipsum sunt, corrupti tempora deserunt quae nisi libero,
            eaque, laborum a ea culpa voluptatibus omnis eos ipsam unde amet
            maiores.
          </p>
        </div>

        <div className='row mt-4 g-3'>
          {approaches.map((app) => (
            <div key={app._id} className='col-md-4 col-12'>
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
