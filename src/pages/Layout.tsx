import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Props } from "./Layout.props"

const Layout = ( {children}: Props) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout