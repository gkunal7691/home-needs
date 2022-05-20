

import  React from "react"
import Header from "./header"
import Footer from "./footer"
import "../../../assets/styles/index.scss"

const Layout = ({ children,active }) => {
 

  return (
    <div className="main-container">
     <Header active={active} />
      <div className="content-section">{children}</div>
      <Footer />
     
    </div>
  )
}



export default Layout
