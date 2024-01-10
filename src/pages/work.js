import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
// import images from '../images'

// console.log(images)

export default () => {
  const data = useStaticQuery(graphql`
    query {
      workJson {
        updated_at(formatString: "DD MMMM YYYY")
        experiences {
          id
          show
          name
          location
          dates
          website
          tagLine
          descriptionCompany
          descriptionProjects {
            name
            url
            description
          }
          descriptionWork
          descriptionTechStack
        }
      }
    }
  `)
  
  return (
    <>
      <SEO />
      <Layout>
        <h1>Work experiences</h1>

        {data.workJson.experiences.map((experience, experienceIndex) => (
          <section key={experienceIndex}>
            <h2>
              <b id={experience.id}>{experience.name}</b>
              <span className="padding-left-right-10">|</span>
              {experience.location}
              <span className="padding-left-right-10">|</span>
              {experience.dates}
              {!experience.website ? null : (
                <span>
                  <span className="padding-left-right-10">|</span>
                  <a href={experience.website} target='_blank' rel='noopener noreferrer'>website</a>
                </span>
              )}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: experience.tagLine }} />
            <div dangerouslySetInnerHTML={{ __html: experience.descriptionCompany }} />
            {experience.descriptionProjects?.map((project, projectIndex) => (
              <p className="padding-left-right-10">
                <a href={project.url}><strong>{project.name}</strong></a>
                <span dangerouslySetInnerHTML={{ __html: project.description}}></span>
              </p>
            ))}
            <div dangerouslySetInnerHTML={{ __html: experience.descriptionWork }} />
            <div dangerouslySetInnerHTML={{ __html: experience.descriptionTechStack }} />
            <br />
          </section>
        ))}

        <br />
        <br />

        <i>Last updated: {data.workJson.updated_at}</i>

        {/* <p>
          <img src='{images.experience-ef.png}' alt='' />
        </p> */}
      </Layout>
    </>
  )
}
