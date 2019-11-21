import React from 'react'
// import PropTypes from 'prop-types'
import { graphql, useStaticQuery, Link } from 'gatsby'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { toKebabCase } from '../../helpers'

import style from '../../styles/post.module.css'

// TODO
// - order tags alphabetically
// - get post info for each tag ?

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//posts//" },
          frontmatter: { published: { eq: true } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
              path
              parent
              excerpt
              tags
              published
            }
          }
        }
      }
    }
  `)

  const tagsGrouped = {}
  data.allMarkdownRemark.edges.forEach(post => {
    if (post.node && post.node.frontmatter && post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach(tag => {
        tagsGrouped[tag] = (tagsGrouped[tag] || 0) + 1
      })
    }
  })

  return (
    <>
      <SEO />
      <Layout>
        <h1>Blog Tags</h1>
        {Object.keys(tagsGrouped).map(tag => (
          <p key={tag}>
            <Link to={`/blog/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
              <span className={style.tag}>#{tag}</span>
            </Link>
            <span> ({tagsGrouped[tag]})</span>
          </p>
        ))}
      </Layout>
    </>
  )
}