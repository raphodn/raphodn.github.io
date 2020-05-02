import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import SEO from '../../components/seo'
import Layout from '../../components/layout'

const Projects = ({ data }) => {
  const { projectsJson } = data
  // console.log(projectsJson)
  return (
    <>
      <SEO />
      <Layout>
        <h1>Projects</h1>
        <p>
          A list of past, current and future projects.
        </p>
        {/* <br /> */}
        {projectsJson.projectGroups.map((projectGroup, projectGroupIndex) => (
          <section key={projectGroupIndex}>
            <h2>{projectGroup.name}</h2>
            <div className="projects-group">
              {projectGroup.links.map((child, childIndex) => (
                <Link to={child.url} key={childIndex} className="project-card">
                  <div className="project-card-image" style={{ backgroundImage: child.backgroundImage ? child.backgroundImage : "url('/images/bcd4e6.jpg')" }}>
                    {!child.description ? null : (
                      <div className="project-card-description">
                        <span className="smaller text-black">{child.description}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    {child.name}&nbsp;
                    {!child.date ? null : <span className="smaller text-grey"><i>{child.date}</i></span>}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </Layout>
    </>
  )
}

Projects.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    projectsJson {
      updated_at(formatString: "DD MMMM YYYY")
      projectGroups {
        name
        links {
          name
          url
          date
          description
          backgroundImage
        }
      }
    }
  }
`

export default Projects