import { graphql } from "gatsby";
import React from "react"
import Layout from "../components/layout/layout";
import Seo from "../components/seo" 
import dateFormat from "dateformat";
import { Link } from "gatsby";
import breadcrumIcon from "../../assets/images/angle-right-solid.svg"


export default function ContactUs({data}) {
    const blogPosts = data.allContentfulHomeNeeds.edges.map(node => node.node)
    console.log(blogPosts);
  return (
    <Layout active={"blogs"}>
      <Seo
        title="Blogs"
      />
       <div className="container mt-3 border-bottom pb-4">
        <div className="pt-4 pb-3 d-flex back-icon">
          <Link
            className="fnt-md-18 fnt-lg-18 fnt-400 fnt-lg-500 text-black text-decoration-none"
            to="/"
          >
            <span className="text-black mb-0">Home Needs</span>
            <img
              className="mx-1"
              src={breadcrumIcon}
              alt="back-icon"
              height={22}
            />
          </Link>

          <Link
            className="fnt-md-18 fnt-lg-18 fnt-400 fnt-lg-500 text-black text-decoration-none"
            to="/blogs/"
          >
            <span className="text-black mb-0">All Blogs</span>
            {/* <img
              className="mx-1"
              src={breadcrumIcon}
              alt="back-icon"
              height={22}
            /> */}
          </Link>
          {/* <p className="fnt-md-18 fnt-lg-18 fnt-400 text-black mb-0">
            All Blogs
          </p> */}
        </div>
        <h1 className="text-center">All blogs</h1>
        <p className="text-center pb-4">
          {`Read our quality educational blogs on different topics related to your home which are explained in an easy and simple way.`}
        </p>
        <div className="row">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className={`mb-4 ${
                i === 0 ? "col-md-4 " : i === 1 ? "col-md-4" : "col-md-4"
              } ${i === 0 ? "col-md-4" : i === 1 ? "col-lg-4" : "col-lg-4"}`}
            >
              <Link
                to={`/blogs/${post.category.toLowerCase().replaceAll(" ", "-")}/${post.slug}/`}
                className="text-decoration-none"
              >
                <div
                  className={`blog-card_image-wrapper ${
                    i === 0 ? "blog-card_small-image" : "blog-card_small-image"
                  }`}
                >
                  <img
                    src={post.bannerImage?.file.url}
                    alt={post.title}
                    className="w-100 blog-card_image"
                  />
                  <h5 className="text-black px-3 d-flex justify-content-between">
                    <div className="blog-card_tag">{post.authorName}</div>
                    <div className="blog-card_tag">
                      {dateFormat(post.postedAt, "longDate")}
                    </div>
                  </h5>
                  <h3 className="text-black px-2 px-md-3 mb-3">{post.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
query pagesQuery {
  allContentfulHomeNeeds {
    edges {
      node {
        id
        slug
        title
        description
        authorName
        postedAt
        category
        bannerImage {
          title
          file {
            url
          }
          gatsbyImageData(layout: CONSTRAINED)
        }
        content {
          raw
          references {
            title
            contentful_id
            __typename
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
}`;