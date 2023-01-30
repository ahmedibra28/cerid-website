import Navigation from './Navigation'
import Footer from './Footer'
import Contact from './Contact'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className=''>{children}</main>
      <hr />
      <Contact />
      <Footer />
    </>
  )
}
