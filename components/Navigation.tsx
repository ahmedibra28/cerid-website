import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import dynamic from 'next/dynamic'

interface Menu {
  _id: number
  name: string
  href: string
  dropDownMenu?: {
    _id: number
    name: string
    href: string
  }[]
}

const Navigation = () => {
  const router = useRouter()

  const isActive = (menu: Menu) => {
    if (menu.href === router.asPath) {
      return 'nav-link active text-decoration-underline'
    }
    return 'nav-link '
  }

  const menus: Menu[] = [
    { _id: 1, name: 'Home', href: '/#' },
    {
      _id: 2,
      name: 'Who We Are',
      href: '/#',
      dropDownMenu: [
        { _id: 1, name: 'About Us', href: '/#about-us' },
        { _id: 2, name: 'Key Achievements', href: '/#key-achievements' },
        { _id: 3, name: 'Governance', href: '/#governance' },
        { _id: 4, name: 'Partners', href: '/#partners' },
      ],
    },
    { _id: 3, name: 'Core Values', href: '/#core-values' },
    { _id: 4, name: 'Projects', href: '/#projects' },
    { _id: 5, name: 'Thematic Areas', href: '/#thematic-areas' },
    { _id: 6, name: 'Careers', href: '/#careers' },
  ]

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary border border-top-0 border-end-0 border-start-0 sticky-lg-top bg-white'>
      <div className='container'>
        <Link
          className='navbar-brand d-flex justify-content-center align-items-center'
          href='/'
        >
          <Image
            src='/logo.png'
            className='img-fluid'
            alt='logo'
            width='150'
            height='150'
          />
          <span className='text-primary fw-bold display-6 ms-2'>CeRID</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
            {menus.map((menu) =>
              menu.dropDownMenu ? (
                <li key={menu._id} className='nav-item dropdown'>
                  <Link
                    href='#'
                    className='nav-link dropdown-toggle'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {menu.name}
                  </Link>
                  <ul className='dropdown-menu'>
                    {menu.dropDownMenu.map((dropDownMenu) => (
                      <li key={dropDownMenu._id}>
                        <Link
                          href={dropDownMenu.href}
                          className='dropdown-item'
                        >
                          {dropDownMenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className='nav-item' key={menu._id}>
                  <Link href={menu.href} className={isActive(menu)}>
                    {menu.name}
                  </Link>
                </li>
              )
            )}
          </ul>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <Link
              href='/#contact-us'
              className='btn btn-primary text-white rounded-pill'
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navigation), {
  ssr: false,
})
