import { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
