import React from "react"
import Footer from "./footer"
import Header from "./header"
import layoutStyle from "./layout.module.scss"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        <div className={layoutStyle.lower}>{children}</div>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
