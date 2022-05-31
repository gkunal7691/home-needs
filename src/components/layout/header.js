import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "../../../assets/styles/header.scss"

const Header = ({ active }) => {
  const [sticker, setSticker] = useState(false)
  const [modalShow, setModalShow] = React.useState(false)

  useEffect(() => {
    document.body.classList.add("home-page")
    typeof window !== "undefined" &&
      (window.onscroll = () => {
        if (window.scrollY < 25) {
          !!sticky.current && sticky.current.classList.remove("secondary")
          setSticker(false)
        } else {
          !!sticky.current && sticky.current.classList.add("secondary")
          !!sticky.current && sticky.current.classList.remove("bg-transparent")
          setSticker(true)
        }
      })
  }, [])
  const sticky = useRef()
  return (
    <Navbar
      className="py-0"
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="transparent"
      variant="dark"
      ref={sticky}
    >
      <Container className="header-border">
        <Navbar.Brand className="w-sidebar">
          <Link to="/">
            {sticker ? (
              <StaticImage
                src="../../../assets/images/logo.png"
                alt="home needs logo"
                className="me-0 w-100"
              />
            ) : (
              <StaticImage
                src="../../../assets/images/logo.png"
                alt="home needs logo"
                className="me-0 w-100"
              />
            )}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="center">
            <Link
              className={`nav-link ${active === "home" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
            {/* <Link
              className={`nav-link ${active === "our-program" ? "active" : ""}`}
              to="/our-program/"
            >
              Our Program
            </Link> */}
            <Link
              className={`nav-link ${active === "blogs" ? "active" : ""}`}
              to="/blogs/"
            >
              All Blogs
            </Link>
            <Link
              className={`nav-link ${active === "contact" ? "active" : ""}`}
              to="/contact-us/"
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
