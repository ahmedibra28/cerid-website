import Navigation from './Navigation'
import Footer from './Footer'
import { ReactNode } from 'react'
import Meta from './Meta'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Meta />
      <Navigation />
      <main
        className=' mt-5 py-4'
        style={{
          minHeight: 'calc(100vh - 110px)',
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
