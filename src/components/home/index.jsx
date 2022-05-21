import { Link } from "gatsby"
import React from "react"
import "../../../assets/styles/blog.scss"


export default function Home() {
  const categorires = ["Livingroom","Bedroom"]

  return (
   <>
      <div className="container mt-md-5 mt-4 border-bottom pb-4">
        <h1 className="text-center">Checkout our latest blogs</h1>
        <p className="text-center pb-4">Read our quality educational blogs related to latest topics around maths and science which are explained in easy and simple way.</p>
        <div className="row">
          {categorires.map((category, i) => (
            <div
              key={i}
              className={`mb-4 ${
                i === 0 ? "col-md-4" : i === 1 ? "col-md-4" : "col-md-4"
              } ${i === 0 ? "col-md-4" : i === 1 ? "col-lg-4" : "col-lg-4"}`}
            >
              <Link
                to={`/blog/${category.toLowerCase()}/`}
                className="text-decoration-none"
              >
                <div
                  className={`blog-card_image-wrapper ${
                    i === 0 ? "blog-card_small-image" : "blog-card_small-image"
                  }`}
                >
                  <img
                    src={
                      require("../../../assets/images/blog-categories/" +
                        category.toLocaleLowerCase() +
                        ".webp").default
                    }
                    alt={category}
                    className="w-100 blog-card_image"
                  />
                  <h3 className="text-black text-center mb-4">{category}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      </>
  )
}
