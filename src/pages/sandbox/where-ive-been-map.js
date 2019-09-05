import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
// import WorldMap from '../../components/world-map'

export default ({ data }) => (
  <>
    <SEO />
    <Layout>
      <h1>Where I've Been Map</h1>
      {/* <WorldMap /> */}
    </Layout>
  </>
)

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `