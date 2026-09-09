import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
// import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import { resolveImageUrl } from '@/lib/image-url'

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cerid.so'),
  title: {
    default: 'CeRID | Centre for Research and Integrated Development',
    template: '%s | CeRID',
  },
  description:
    'CeRID advances research, humanitarian support, climate resilience, education, and sustainable development across Somalia and the Horn of Africa.',
  openGraph: {
    type: 'website',
    siteName: 'CeRID',
    title: 'Centre for Research and Integrated Development',
    description:
      'Research, humanitarian support, climate resilience, education, and sustainable development.',
    images: [resolveImageUrl('/images/logo.webp')],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={publicSans.variable}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
