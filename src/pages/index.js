import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => (
  <>
    <SEO />
    <Layout>
      <h1>Hi there !</h1>
      
      <p>
        I'm a French full-stack developer, currently based in Singapore.
      </p>

      <p>
        Datalover, passionately curious, I'm always eager to learn & build (meaningful) stuff.<br />
        I have a strong interest in data visualization & cartography, digital commons, decentralized systems,
        and any interdisciplinary subject involving data.
      </p>

      <p>
        Oh and I like penguins.
      </p>

      <p>
        For more info & contact details, see <Link to='/about'>About</Link>
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