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
        I'm a French web developer, currently based in Grenoble 🏔️ (previously Paris, Singapore).
      </p>

      <p>
        I'm lucky to work solely on open-source projects!<br />
        I hope to keep it that way for a long time :)<br />
        Usually full-stack Python/Django/API-based products.
      </p>

      <p>
        Passionately curious, I'm always eager to learn & build (meaningful) stuff.<br />
        I have a strong interest in digital commons, data visualization & cartography, decentralized systems,
        and any interdisciplinary subject involving data.<br />
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