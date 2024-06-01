import { getAddress } from '@/app/appwrite'
import { LocateIcon, MailIcon, PhoneIcon } from 'lucide-react'
import React from 'react'

export default async function Footer() {
  const address = await getAddress()
  const addressData = address?.documents

  return (
    <footer className='w-full mt-8 py-8' id='contact-us'>
      <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center'>
        Get In Touch
      </h2>
      <p className='text-center md:text-lg'>
        Let Us Help You Overshoot Your Goals in the Right Ways.
      </p>

      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8'>
        {addressData.map((item, index) => (
          <div key={index} className='space-y-2'>
            <h3 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
              {item.office}
            </h3>
            <div className='flex items-center space-x-2'>
              <PhoneIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
              <span className='text-gray-600 dark:text-gray-400'>
                {item.mobile}
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <MailIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
              <span className='text-gray-600 dark:text-gray-400'>
                {item.email}
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <LocateIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
              <span className='text-gray-600 dark:text-gray-400'>
                {item.address}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='container'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.465327109004!2d41.872786814043295!3d3.9239300489969957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17c26323f6bdb35b%3A0x4b1089e34d7fe8a1!2sCeRID!5e0!3m2!1sen!2sso!4v1640259822302!5m2!1sen!2sso'
          height='300'
          className='w-full'
          loading='lazy'
          style={{ border: '0' }}
          allowFullScreen={true}
        ></iframe>
      </div>
    </footer>
  )
}
