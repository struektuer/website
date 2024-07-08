/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `struektuer-website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  // {
  //   resolve: 'gatsby-source-contentful',
  //   options: {
  //     "accessToken": "",
  //     "spaceId": ""
  //   }
  // }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-sass"]
};