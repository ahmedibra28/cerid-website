import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { getAddress } from '@/lib/content'
import { resolveImageUrl } from '@/lib/image-url'

export default async function Footer() {
  const { documents } = await getAddress()
  const primary = documents[0]

  return (
    <footer className='bg-forest text-white' id='contact-us'>
      <div className='site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1.1fr] lg:py-20'>
        <div>
          <div className='flex items-center gap-3'>
            <Image
              src={resolveImageUrl('/images/logo.webp')}
              alt=''
              width={56}
              height={56}
              className='h-14 w-14 rounded-full'
            />
            <span className='text-3xl font-extrabold'>CeRID</span>
          </div>
          <p className='mt-6 max-w-sm leading-7 text-white/70'>
            A regional non-governmental organization in the Horn of Africa
            advancing research, humanitarian support, climate resilience,
            education, and sustainable development.
          </p>
        </div>

        <div>
          <h2 className='text-sm font-bold uppercase tracking-[0.16em] text-emerald-300'>
            Explore
          </h2>
          <nav className='mt-5 grid gap-3 text-sm text-white/75'>
            <Link href='/about-us' className='hover:text-white'>
              About us
            </Link>
            <Link href='/thematic-areas' className='hover:text-white'>
              What we do
            </Link>
            <Link href='/projects' className='hover:text-white'>
              Projects
            </Link>
            <Link href='/impact' className='hover:text-white'>
              Impact and results
            </Link>
            <Link href='/gallery' className='hover:text-white'>
              Gallery
            </Link>
            <Link href='/news' className='hover:text-white'>
              News
            </Link>
          </nav>
        </div>

        <div>
          <h2 className='text-sm font-bold uppercase tracking-[0.16em] text-emerald-300'>
            Organization
          </h2>
          <nav className='mt-5 grid gap-3 text-sm text-white/75'>
            <Link href='/governance' className='hover:text-white'>
              Governance
            </Link>
            <Link href='/core-values' className='hover:text-white'>
              Core values
            </Link>
            <Link href='/careers' className='hover:text-white'>
              Careers
            </Link>
            <Link href='/#partners' className='hover:text-white'>
              Partners
            </Link>
          </nav>
        </div>

        <div>
          <h2 className='text-sm font-bold uppercase tracking-[0.16em] text-emerald-300'>
            Contact
          </h2>
          <div className='mt-5 grid gap-4 text-sm leading-6 text-white/75'>
            <a
              href={`mailto:${primary?.email}`}
              className='flex gap-3 hover:text-white'
            >
              <Mail className='mt-1 h-4 w-4 shrink-0 text-emerald-300' />{' '}
              {primary?.email}
            </a>
            <a
              href={`tel:${primary?.mobile?.replace(/[^\d+]/g, '')}`}
              className='flex gap-3 hover:text-white'
            >
              <Phone className='mt-1 h-4 w-4 shrink-0 text-emerald-300' />{' '}
              {primary?.mobile}
            </a>
            <p className='flex gap-3'>
              <MapPin className='mt-1 h-4 w-4 shrink-0 text-emerald-300' />{' '}
              {primary?.address}
            </p>
          </div>
        </div>
      </div>

      <div className='border-t border-white/15'>
        <div className='site-container flex flex-col gap-2 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between'>
          <p>© {new Date().getFullYear()} CeRID. All rights reserved.</p>
          <p>Centre for Research and Integrated Development</p>
        </div>
      </div>
    </footer>
  )
}
