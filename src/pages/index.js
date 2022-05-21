import * as React from "react"


import Layout from "../components/layout/layout";
import Seo from "../components/seo"
import HomePage from '../components/home/index';




const IndexPage = () => (
  <Layout active={'home'}>
    <Seo title="Home" />
    <HomePage/>
  </Layout>
)

export default IndexPage
