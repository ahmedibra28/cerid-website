import Navigation from './Navigation'
import Head from 'next/head'
import Footer from './Footer'
import Contact from './Contact'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className=''>{children}</main>
      <Contact />
      <Footer />
    </>
  )
}
