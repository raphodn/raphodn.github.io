import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => (
  <>
    <SEO />
    <Layout>
      <h1>Projects</h1>
      <p>
        A list of past, current and futur projects.
      </p>
      <p>
        Coming soon :)
      </p>
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