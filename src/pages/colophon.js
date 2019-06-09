import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => (
  <>
    <SEO />
    <Layout>
      <h1>Colophon</h1>
      
      <p>
        This website is hosted on <i><a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Github Pages</a></i>, a free & simple service offered by Github to host static websites.
      </p>
      <p>
        The Javascript framework used to build these pages is <i><a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">GatsbyJS</a></i>, it's based on ReactJS and uses GraphQL for querying data.
        I use yarn for managing dependencies.
      </p>
      <p>
        The theme is taken from one of the Gatsby starter themes, the source code can be found <i><a href="https://github.com/panr/gatsby-starter-hello-friend" target="_blank" rel="noopener noreferrer">here</a></i>.
        I use <i><a href="https://www.gatsbyjs.org/packages/gatsby-remark-twemoji-shortcut/" target="_blank" rel="noopener noreferrer">twemoji</a></i> to insert emojis in my text.
        The font is <i><a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter UI</a></i>.
      </p>
    </Layout>
  </>
)