import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => (
  <>
    <SEO />
    <Layout>
      <h1>Hi there!</h1>
      
      <p>
        I'm a French full-stack developer, currently based in <del>Singapore</del> <del>Paris</del> Grenoble 🏔️.
      </p>

      <p>
        Datalover, passionately curious, I'm always eager to learn & build (meaningful) stuff.<br />
        I have a strong interest in data visualization & cartography, digital commons, decentralized systems,
        and any interdisciplinary subject involving data. <br />
        I'm also quite aware and concerned about the climate emergency…
      </p>

      <p>
        Oh and I like penguins <span role="img" aria-label="penguin emoji">🐧</span>
      </p>

      <p>
        For more info & contact details, see <Link to='/about'>About</Link>.
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