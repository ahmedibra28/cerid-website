/* eslint-disable @next/next/no-img-element */
const Achievement = () => {
  return (
    <div className='pb-2'>
      <div id='achievement' className='container my-5'>
        <h3 className='text-center text-success pt-5'>Key Achievement</h3>

        <div className='row gy-3'>
          <div className='col-md-6 col-12 my-auto'>
            <p className='card-body'>
              <img
                src='/slides/strategy.png'
                className='img-fluid'
                alt='achievement'
              />
            </p>
          </div>
          <div className='col-md-6 col-12 my-auto'>
            <p>
              From its inception, CeRID has been well positioned in research,
              implementing development and humanitarian programs and supporting
              community capacity building, peace and dialogue, and gender
              equity. Despite CeRID’s dominant food security, livelihoods,
              resilience and climate smart agriculture, education and skill
              training, and emergency response.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievement
