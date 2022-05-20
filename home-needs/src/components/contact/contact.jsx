import axios from "axios"
import { Formik } from "formik"
import React, { useCallback } from "react"
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
// import Swal from "sweetalert2"
import contactLogo from "../../../assets/images/Contact-logo.svg"
import ContactLeftArrow from "../../../assets/images/ContactLeftArrow.svg"
import ContactRightArrow from "../../../assets/images/ContactRightArrow.svg"
import Location from "../../../assets/images/Location.svg"
import Mail from "../../../assets/images/Mail.svg"
import "../../../assets/styles/contact.scss"

const Contact = () => {
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

  const submitForm = async (
    values,
    setSubmitting,
    errors,
    setFieldValue,
    setFieldTouched
  ) => {
    if (errors && Object.values(errors)?.filter(e => e.length)?.length) {
      // return Swal.fire({
      //   icon: "error",
      //   text: "Please fill the required fields.",
      //   confirmButtonColor: "#30855c",
      //   timer: 3000,
      // })
      alert("Please fill the required fields.")
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

    const body = {
      ...values,
      source: "Public Website Contact Page",
      // recaptcha: token,
    }
    axios
      .post(`${process.env.API_URL}/leads`, body)
      .then(res => {
        if (res.data.success) {
          // Swal.fire({
          //   icon: "success",
          //   text: "Thank you. We will get back to you soon.",
          //   confirmButtonColor: "#30855c",
          //   timer: 3000,
          // })
          alert("Thank you. We will get back to you soon.")
          ;["fullName", "schoolName", "email", "mobile", "comments"].forEach(
            field => {
              setFieldTouched(field, false)
              setFieldValue(field, "")
            }
          )
        }
      })
      .catch(error => {
        // Swal.fire({
        //   icon: "error",
        //   text: error.response.data?.errors[0] || "Oops! Something went wrong.",
        //   confirmButtonColor: "#30855c",
        //   timer: 3000,
        // }).finally(() => {
        //   setSubmitting(false)
        // })
        alert(error.response.data?.errors[0] || "Oops! Something went wrong.")
      })
  }

  return (
    <>
      <div className="contact-sec">
        <div className="container pt-contact">
          <div className="d-flex justify-content-center talk-to-us">
            <img src={ContactLeftArrow} alt="ContactRightArrow" />
            <h1>Talk to us</h1>
            <img src={ContactRightArrow} alt="ContactRightArrow" />
          </div>
          <div className="d-flex justify-content-around align-items-center">
            <div className="contact-box d-none d-lg-block">
              <h2 className="fnt-lg-30 fnt-500 text-clr54 mb-md-5">
                Find us <span className="text-clr0c">here</span>
              </h2>
              <div className="d-flex mb-md-4">
                <img src={contactLogo} alt="contact-logo" />
                <p className="d-flex align-items-center fnt-lg-24 fnt-500 text-clr54 mb-0 px-3">
                  +91 8147594806
                </p>
              </div>
              <div className="d-flex mb-md-4">
                <img src={Mail} alt="Mail" />
                <p className="d-flex align-items-center fnt-lg-24 fnt-500 text-clr54 mb-0 px-3">
                  info@homeneeds.com
                </p>
              </div>
              <div className="d-flex mb-md-4">
                <img src={Location} alt="Location" />
                <p className="d-flex align-items-center fnt-lg-24 fnt-500 text-clr54 mb-0 px-4">
                  Bangalore, India
                </p>
              </div>
            </div>
            <div className="form-box">
              <h4 className="text-center fnt-lg-24 fnt-18 fnt-500 fnt-lg-500 text-clr54 pt-4 pt-md-0 mb-3 mb-md-4">
                We will contact you shortly!
              </h4>
              <Formik
                initialValues={{
                  fullName: "",
                  schoolName: "",
                  email: "",
                  mobile: "",
                  comments: "",
                }}
                validate={values => {
                  const errors = {}
                  if (!values.email) {
                    errors.email = "Required"
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address"
                  }
                  if (!values.fullName) {
                    errors.fullName = "Required"
                  }
                
                  if (!values.mobile) {
                    errors.mobile = "Required"
                  }
                  return errors
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setSubmitting,
                  setFieldValue,
                  setErrors,
                  setFieldTouched,
                }) => (
                  <form
                    onSubmit={event => {
                      event.preventDefault()
                      submitForm(
                        values,
                        setSubmitting,
                        errors,
                        setFieldValue,
                        setFieldTouched
                      )
                    }}
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        name="fullName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                        className={`${
                          errors.fullName && touched.fullName ? "invalid" : ""
                        }`}
                        required
                      />
                    </div>
                   
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={`${
                          errors.email && touched.email ? "invalid" : ""
                        }`}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Phone"
                        name="mobile"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobile}
                        className={`${
                          errors.mobile && touched.mobile ? "invalid" : ""
                        }`}
                        required
                      />
                    </div>
                    <textarea
                      row="2"
                      col="5"
                      placeholder="Any question or comment for us?"
                      name="comments"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.comments}
                      className={`${
                        errors.comments && touched.comments ? "invalid" : ""
                      }`}
                    ></textarea>
                    <div className="text-center">
                      <button className="demo-btn" disabled={isSubmitting}>
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
