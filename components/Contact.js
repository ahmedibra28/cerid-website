import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  const headOfficeContact = () => (
    <>
      <h5 className='text-uppercase fw-bold'>Head Office</h5>
      <address>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-success'>
            <FaMapMarkerAlt className='mb-1' />
            Market Street, Belethawo Town, Gedo Region, Jubbaland State, Somalia
          </li>
          <li className='list-group-item text-success'>
            <FaPhoneAlt className='mb-1' />
            <Link href='tel:+25214361208'>
              <a className='text-decoration-none'> +252 (0) 436 1208</a>
            </Link>
          </li>
          <li className='list-group-item text-success'>
            <FaEnvelope className='mb-1' />
            <Link href='mailto:info@cerid.so'>
              <a className='text-decoration-none'> info@cerid.so</a>
            </Link>
          </li>
        </ul>
      </address>
    </>
  )

  const liaisonOfficeContact = () => (
    <>
      <h5 className='text-uppercase fw-bold'>Liaison Office</h5>
      <address>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-success'>
            <FaMapMarkerAlt className='mb-1' />
            Apartment 7, Third Floor, Mumin House, Madina Gate Street,
            Mogadishu, Somalia
          </li>
          <li className='list-group-item text-success'>
            <FaPhoneAlt className='mb-1' />
            <Link href='tel:+2521858352'>
              <a className='text-decoration-none'> +252 (1) 85 8352</a>
            </Link>
          </li>
          <li className='list-group-item text-success'>
            <FaEnvelope className='mb-1' />
            <Link href='mailto:info@cerid.so'>
              <a className='text-decoration-none'> info@cerid.so</a>
            </Link>
          </li>
        </ul>
      </address>
    </>
  )

  return (
    <div className='container py-5 my-5' id='contact'>
      <h3 className='text-center text-success display-6 fw-light'>
        Let Us Help You Overshoot Your Goals in the Right Ways.
      </h3>
      <h1 className='text-center display-6 fw-bold text-success mt-4'>
        Get In Touch
      </h1>
      <div className='row mt-4'>
        <div className='col-lg-4 col-md-6 col-12 my-auto'>
          {headOfficeContact()}
        </div>
        <div className='col-lg-4 col-md-6 col-12 my-auto'>
          {liaisonOfficeContact()}
        </div>
        <div className='col-lg-4 col-md-6 col-12'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.465327109004!2d41.872786814043295!3d3.9239300489969957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17c26323f6bdb35b%3A0x4b1089e34d7fe8a1!2sCeRID!5e0!3m2!1sen!2sso!4v1640259822302!5m2!1sen!2sso'
            height='300'
            className='w-100'
            loading='lazy'
            style={{ border: '0' }}
            allowFullScreen=''
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
