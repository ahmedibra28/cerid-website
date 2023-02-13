import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  const items = [
    {
      id: 1,
      title: 'Head Office',
      address:
        'Airport Road, Madina Gate, Opposite Business Park Hotel, Mogadishu, Somalia',
      landline: '+25261858352',
      email: 'info@cerid.so',
    },
    {
      id: 2,
      title: 'Main Sub Office',
      address:
        'Market Street, BeletHawo Town, Gedo Region, Jubbaland State, Somalia',
      tel: '+252617118212/04361208',
      email: 'info@cerid.so',
    },
    {
      id: 3,
      title: 'Liaison Office',
      address: 'MREF Street, Luug Town, Gedo Region, Jubbaland, Somalia',
      landline: '+25204362064',
      email: 'info@cerid.so',
    },
    {
      id: 4,
      title: 'Liaison Office',
      address:
        'Main Market Street, Qansax-Dhere, Bay Region, South West, Somalia',
      tel: '+252613419900',
      email: 'info@cerid.so',
    },
  ]

  return (
    <div className='container py-5 my-5' id='contact'>
      <h3 className='text-center text-success display-6 fw-light'>
        Let Us Help You Overshoot Your Goals in the Right Ways.
      </h3>
      <h1 className='text-center display-6 fw-bold text-success mt-4'>
        Get In Touch
      </h1>
      <div className='row mt-4'>
        {items?.map((item) => (
          <div key={item.id} className='col-lg-3 col-md-6 col-12'>
            <h5 className='text-uppercase fw-bold'>{item.title}</h5>
            <address>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item text-success'>
                  <FaMapMarkerAlt className='mb-1' /> {item.address}
                </li>
                <li className='list-group-item text-success'>
                  <FaPhoneAlt className='mb-1' />
                  <Link
                    className='text-decoration-none'
                    href={`tel:${item?.landline || item?.tel}`}
                  >
                    {' '}
                    {item?.landline || item?.tel}
                  </Link>
                </li>
                <li className='list-group-item text-success'>
                  <FaEnvelope className='mb-1' />
                  <Link
                    className='text-decoration-none'
                    href={`mailto:${item.email}`}
                  >
                    {' '}
                    {item.email}
                  </Link>
                </li>
              </ul>
            </address>
          </div>
        ))}

        <div className='col-12'>
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
