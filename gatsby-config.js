module.exports = {
  siteMetadata: {
    title: `Zululu Agency`,
    description: `Zululu Agency was founded in 2021 by founder, Ridvan Tahir. AA continues to be at the forefront of art by establishing the careers of our talents on a holistic level -- and setting trends within the industry.`,
    author: `@Ridvan`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        resolve: "gatsby-source-wordpress",
        options: {
          url: "http://zululu-agency.local/graphql",
        },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
