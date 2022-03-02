import Link from 'next/link'
import dynamic from 'next/dynamic'

const navItems = [
  // { _id: 9, name: 'About Us', path: '/about' },
  // { _id: 1, name: 'Governance', path: '/#governance' },
  // { _id: 2, name: 'Strategy', path: '/#strategy' },
  { _id: 3, name: 'Core Values', path: '/#core-values' },
  { _id: 12, name: 'Projects', path: '/#projects' },
  { _id: 11, name: 'Thematic Areas', path: '/thematic-area' },
  { _id: 7, name: 'Careers', path: '/careers' },
  // { _id: 8, name: 'Blog', path: '/blog' },
  { _id: 10, name: 'Contact Us', path: '/#contact' },
  // { _id: 14, name: 'Who We Are', path: '/#who' },
]

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-lg'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand d-flex align-items-center'>
            <img src='/logo.png' alt='logo' width='30' height='30' />{' '}
            <span className='ms-2'> CeRID</span>
          </a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Who We Are
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link href='/#about'>
                    <a className='dropdown-item'>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#governance'>
                    <a className='dropdown-item'>Governance</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#strategy'>
                    <a className='dropdown-item'>Strategy</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#partners'>
                    <a className='dropdown-item'>Partners</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#audit'>
                    <a className='dropdown-item'>Audit</a>
                  </Link>
                </li>
              </ul>
            </li>

            {navItems.map((nav) => (
              <li key={nav._id} className='nav-item'>
                <Link href={nav.path}>
                  <a className='nav-link  ' aria-current='page'>
                    {nav.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navigation), { ssr: false })
