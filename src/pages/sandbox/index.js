import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../../components/seo'
import Layout from '../../components/layout'

const Sandbox = ({ data }) => {
  const sandboxChildren = data.sitemapJson.sitemapGroups.find(g => g.name === 'Sandbox').links.filter(l => l.url !== '/sandbox')

  return (
    <>
      <SEO />
      <Layout>
        <h1>Sandbox</h1>
        <p>
          Tinkering with Gatsby, and testing other stuff.
        </p>
        <ul className="margin-top-0">
          {sandboxChildren.map((child, childIndex) => (
            <li key={childIndex}><Link to={child.url}>{child.name}</Link></li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    sitemapJson {
      updated_at(formatString: "DD MMMM YYYY")
      sitemapGroups {
        name
        links {
          name
          url
        }
      }
    }
  }
`

export default Sandbox