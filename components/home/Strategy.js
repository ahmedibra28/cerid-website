import Link from 'next/link'

const Strategy = () => {
  return (
    <div id='strategy' className='container my-5'>
      <h3 className='text-center text-success pt-5'>Strategy</h3>

      <div className='row gy-3'>
        <div className='col-md-8 col-12 mx-auto text-center'>
          <p className='card-body'>
            The organization is currently running four programmes which are;
            education and skills development, WASH – Water, Sanitation & Health,
            NRM – Natural Resource Management and Livelihoods & Environment and
            Social Justice. Under the education and skills development project,
            the organization is currently supporting 17 primary schools, one
            secondary school and SAMTEC (www.samtec.so), the only TVET –
            Technical and Vocational Education and Training center...
          </p>
          <Link href={`/strategy`} className='btn btn-outline-success'>
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Strategy
