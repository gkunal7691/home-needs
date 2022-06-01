const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const BlogPost = path.resolve("./src/templates/blog-post.js")
  const BlogCategory = path.resolve("./src/templates/blog-category.js")

  return graphql(
    `
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
                gatsbyImageData(layout: FIXED)
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
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const blogs = result.data.allContentfulHomeNeeds.edges.map(
      node => node.node
    )

    console.log(blogs)

    const categories = [...new Set(blogs.map(blog => blog.category))]

    categories.forEach(category => {
      actions.createPage({
        path: `/blogs/${category.toLowerCase().replaceAll(" ", "-")}/`,
        component: BlogCategory,
        context: { category },
      })
    })

    blogs.forEach(blog => {
      actions.createPage({
        path: `/blogs/${blog.category.toLowerCase().replaceAll(" ", "-")}/${
          blog.slug
        }/`,
        component: BlogPost,
        context: blog,
      })
    })
  })
}
