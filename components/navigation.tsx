'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const links = [
  { href: '/about-us', label: 'Who we are' },
  { href: '/#thematic-areas', label: 'What we do' },
  { href: '/#projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/news', label: 'News' },
  { href: '/careers', label: 'Careers' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 border-b border-black/5 bg-white'>
      <div className='hidden bg-forest text-white md:block'>
        <div className='site-container flex h-9 items-center justify-between text-xs font-medium'>
          <p className='tracking-wide'>Working with communities for a resilient Somalia.</p>
          <div className='flex items-center gap-6 text-white/90'>
            <Link href='/news' className='hover:text-white'>News</Link>
            <Link href='/careers' className='hover:text-white'>Careers</Link>
            <Link href='/#contact-us' className='hover:text-white'>Contact</Link>
          </div>
        </div>
      </div>

      <div className='site-container flex h-[78px] items-center justify-between'>
        <Link href='/' className='flex items-center gap-3' aria-label='CeRID home'>
          <Image src='/images/logo.webp' alt='' width={48} height={48} className='h-12 w-12 rounded-full object-cover' />
          <div>
            <span className='block text-2xl font-extrabold leading-none tracking-tight text-brand'>CeRID</span>
            <span className='mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500 sm:block'>
              Research & integrated development
            </span>
          </div>
        </Link>

        <nav className='hidden items-center gap-6 lg:flex' aria-label='Main navigation'>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className='text-sm font-semibold text-slate-700 transition-colors hover:text-brand'>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden lg:block'>
          <Button asChild className='h-11 rounded-sm bg-brand px-6 font-bold hover:bg-forest'>
            <Link href='/#contact-us'>Partner with us</Link>
          </Button>
        </div>

        <button
          type='button'
          className='grid h-11 w-11 place-items-center text-slate-900 lg:hidden'
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className='border-t bg-white px-5 py-5 lg:hidden' aria-label='Mobile navigation'>
          <div className='mx-auto grid max-w-7xl gap-1'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className='border-b border-slate-100 py-3 text-base font-semibold text-slate-800'
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className='mt-4 h-12 rounded-sm bg-brand font-bold'>
              <Link href='/#contact-us' onClick={() => setOpen(false)}>Partner with us</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
