import React, { useCallback } from "react"
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { Formik } from "formik"
// import Swal from "sweetalert2"
import "../../../assets/styles/footer.scss"
import { Link } from "gatsby"
import axios from "axios"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  // const { executeRecaptcha } = useGoogleReCaptcha()
  // const processReCaptcha = useCallback(async () => {
  //   try {
  //     if (!executeRecaptcha) {
  //       console.log("Execute recaptcha not yet available")
  //       return null
  //     }

  //     const token = await executeRecaptcha("submitForm")
  //     console.log(token)
  //     return token || null
  //   } catch (e) {
  //     return null
  //   }
  // }, [executeRecaptcha])

  const sendSubscribe = async (values, setSubmitting, setFieldValue) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(values.email)) {
      // return Swal.fire({
      //   icon: "error",
      //   text: "Please enter valid email",
      //   confirmButtonColor: "#30855c",
      //   timer: 3000,
      // })
      alert("Please enter valid email")
    }

    // const token = await processReCaptcha()

    // if (!token) {
    //   // return Swal.fire({
    //   //   icon: "error",
    //   //   text: "ReCaptcha verification failed",
    //   //   confirmButtonColor: "#30855c",
    //   //   timer: 3000,
    //   // })
    //   alert("ReCaptcha verification failed")
    // }

    axios
      .post(`${process.env.API_URL}/leads/email-subscribe`, {
        email: values.email,
        // recaptcha: token,
      })
      .then(response => {
        if (response.data?.data?.result === "success") {
          // Swal.fire({
          //   icon: "success",
          //   text: "Success",
          //   confirmButtonColor: "#30855c",
          //   timer: 3000,
          // })
          alert("Success")
        } else {
          // Swal.fire({
          //   icon: "error",
          //   text: response.data?.data?.msg?.includes("already subscribed")
          //     ? "You are already subscribed."
          //     : "Error",
          //   confirmButtonColor: "#30855c",
          //   timer: 3000,
          // })
          alert(
            response.data?.data?.msg?.includes("already subscribed")
              ? "You are already subscribed."
              : "Error"
          )
        }
        setSubmitting(false)
        setFieldValue("email", "")
      })
      .catch(() => {
        // Swal.fire({
        //   icon: "error",
        //   text: "Error",
        //   confirmButtonColor: "#30855c",
        //   timer: 3000,
        // })
        alert("Error")
        setSubmitting(false)
      })
  }
  return (
    <>
      <footer className="text-center text-lg-start bg-clr54 ">
        <section className="pt-1">
          <div className="container text-center text-md-start mt-md-5">
            <div className="d-md-flex justify-content-between mt-3">
              <div className="col-md-5 mb-4">
                <Link to="/">
                  <StaticImage
                    src="../../../assets/images/logo-footer.png"
                    alt="home_needs-logo"
                    className="mb-3"
                  />
                </Link>

                <div className="mb-4 d-lg-none">
                  <div className="mb-3">
                    <Link
                      className="fnt-md-20 fnt-lg-22 fnt-500 text-white text-decoration-none"
                      to="/blogs/"
                    >
                      Blogs
                    </Link>
                  </div>
                </div>

                <div className="pt-md-2 pb-md-5 footer-icon-sm">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="me-xl-4 text-reset"
                  >
                    <StaticImage
                      src="../../../assets/images/Facebook.svg"
                      alt="Facebook"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/homeneeds_india/"
                    target="_blank"
                    rel="noreferrer"
                    className="me-xl-4 text-reset"
                  >
                    <StaticImage
                      src="../../../assets/images/Instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                 
                  <a
                    href="https://twitter.com/homeneeds_india"
                    target="_blank"
                    rel="noreferrer"
                    className="me-xl-4 text-reset"
                  >
                    <StaticImage
                      src="../../../assets/images/Twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                 
                </div>
                
              </div>

              <div className="d-md-flex">
                <div className="mx-md-5 pr-lx-5 mb-4 d-none d-lg-block">
                  <h6 className="fnt-md-28 fnt-lg-28 fnt-700 text-white mb-4">
                    Site Map
                  </h6>
                  <div className="mb-md-3">
                    <Link
                      className="fnt-md-20 fnt-lg-22 fnt-500 text-white text-decoration-none"
                      to="/blogs/"
                    >
                      Blogs
                    </Link>
                  </div>
                </div>

                <div className="mb-md-0">
                  <h6 className="fnt-md-28 fnt-lg-28 fnt-700 text-white mb-4 d-none d-lg-block">
                    Contact
                  </h6>
                  <p className="fnt-md-20 fnt-lg-22 fnt-500 text-white">
                    <StaticImage
                      className="d-lg-none me-3"
                      src="../../../assets/images/Contact-icon.svg"
                      alt="contact"
                    />
                    <a className="text-white text-decoration-none" href="tel:+919986882266">+91 9986882266</a>
                  </p>
                  <p className="fnt-md-20 fnt-lg-22 fnt-500">
                    <StaticImage
                      className="d-lg-none me-3"
                      src="../../../assets/images/Mail-icon.svg"
                      alt="home_needs-email"
                    />
                    <a className="text-white text-decoration-none" href="mailto:ak13@outlook.in">ak13@outlook.in</a>
                  </p>
                  <p className="fnt-md-20 fnt-lg-22 fnt-500 text-white">
                    <StaticImage
                      className="d-lg-none me-3"
                      src="../../../assets/images/Location-icon.svg"
                      alt="softobotics address"
                    />
                    Bangalore, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 fnt-md-22 fnt-lg-22 text-white copyright">
          Copyright © {new Date().getFullYear()} &nbsp;
          <a className="text-reset" href="https://www.homeneeds.com/">
            Home Needs
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
