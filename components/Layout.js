import Navigation from './Navigation'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>CeRID</title>
        <meta property='og:title' content='CeRID' key='title' />
      </Head>
      <Navigation />
      <main className='mt-3'>{children}</main>
      <Footer />
    </>
  )
}
