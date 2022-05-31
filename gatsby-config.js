module.exports = {
  siteMetadata: {
    title: `HomeNeeds Blog`,
    description: `Read our quality educational blogs on different topics related to your home which are explained in an easy and simple way.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "q91wuqw79fdx",
        accessToken: "azjIaqGU8FE37-WjAa6AlKI9aB6dpV9hg22nXbA1i_I",
        // environment: 'Testing'
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "G-K8H957GMRV",
        includeInDevelopment: true,
        routeChangeEventName: "routechange",
      },
    },
  ],
}
