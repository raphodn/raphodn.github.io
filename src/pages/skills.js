import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
// import images from '../images'

// console.log(images)

export default ({ data }) => (
  <>
    <SEO />
    <Layout>
      <h1>Skills</h1>
      
      <p>
        Coming soon :)
      </p>

      <p>
        <img src='{images.experience-ef.png}' alt='' />
      </p>
    </Layout>
  </>
)