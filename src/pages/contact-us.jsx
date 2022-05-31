import React from "react"
import Contact from "../components/contact/contact";
import Layout from "../components/layout/layout";
import Seo from "../components/seo" 

export default function ContactUs() {
  return (
    <Layout active={"contact"}>
      <Seo
        title="Talk to us"
        description="We are always ready to help for any kind of support. Fill out the contact us form, we will contact you shortly or send us mail us at ak13@outlook.in"
      />
      <Contact />
    </Layout>
  )
}