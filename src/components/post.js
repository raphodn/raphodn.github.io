import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

// import Navigation from './navigation'
import { toKebabCase } from '../helpers'

import style from '../styles/post.module.css'

const Post = ({
  title,
  date,
  path,
  parent,
  coverImage,
  excerpt,
  tags,
  html,
  previousPost,
  nextPost,
}) => {
  // const previousPath = previousPost && previousPost.frontmatter.path
  // const previousLabel = previousPost && previousPost.frontmatter.title
  // const nextPath = nextPost && nextPost.frontmatter.path
  // const nextLabel = nextPost && nextPost.frontmatter.title

  return (
    <div className={`${style.post} ${!html ? style.postShort : ''}`}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          <Link to={path}>{title}</Link>
        </h1>
        <div className={style.meta}>
          {(!date || (date === 'Invalid date')) ? '' : date}
        </div>

        {coverImage && (
          <Img
            fluid={coverImage.childImageSharp.fluid}
            className={style.coverImage}
          />
        )}

        {/* If html is not provided, the user is on the blog home page: show excerpt & read more link
            Else show html & tags at the bottom */}
        {!html ? (
          <>
            {excerpt ? (
              <>
                <p>{excerpt}</p>
                {/* <Link to={path} className={style.readMore}>
                  Read more →
                </Link> */}
              </>
            ) : null}
          </>
        ) : (
          <>
            <br />
            {/* Content */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <br />
            {/* Tags */}
            {tags ? (
              <div className={style.tags}>
                {tags.map(tag => (
                  <span key={tag}>
                    <Link to={`/blog/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                      <span className={style.tag}>#{tag}</span>
                    </Link>
                    <span>&nbsp;&nbsp;</span>
                  </span>
                ))}
              </div>
            ) : null}
            {/* Back to parent */}
            {/* {parent} */}
            {parent ? (
              <Link to={`/${parent}`} className={style.readMore}>
                ← Back to {parent}
              </Link>
            ) : null}
            {/* Navigation */}
            {/* <Navigation
              previousPath={previousPath}
              previousLabel={previousLabel}
              nextPath={nextPath}
              nextLabel={nextLabel}
            /> */}
          </>
        )}
      </div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  parent: PropTypes.string,
  coverImage: PropTypes.object,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
}

export default Post
