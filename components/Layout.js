import Navigation from './Navigation'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className=''>{children}</main>
      <Footer />
    </>
  )
}
