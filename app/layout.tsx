import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'

// const inter = Inter({ subsets: ['latin'] })
// change to arial font

export const metadata: Metadata = {
  title: 'CeRID',
  description: 'Centre for Research and Integrated Development',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
