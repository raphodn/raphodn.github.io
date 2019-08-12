import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
// import images from '../images'

// console.log(images)

export default () => {
  const data = useStaticQuery(graphql`
    query {
      experiencesJson {
        updated_at(formatString: "DD MMMM YYYY")
        experienceGroups {
          id
          name
          experiences {
            id
            show
            name
            location
            dates
            website
            description
          }
        }
      }
    }
  `)
  
  return (
    <>
      <SEO />
      <Layout>
        <h1>Experiences</h1>

        {data.experiencesJson.experienceGroups.map((experienceGroup, experienceGroupIndex) => (
          <section key={experienceGroupIndex}>
            <h2 id={experienceGroup.id}>{experienceGroup.name}</h2>
            {experienceGroup.experiences.filter(exp => exp.show).map((childExperience, childIndex) => (
              <div key={childIndex}>
                <h3>
                  <b id={childExperience.id}>{childExperience.name}</b>
                  <span className="padding-left-right-10">|</span>
                  {childExperience.location}
                  <span className="padding-left-right-10">|</span>
                  {childExperience.dates}
                  {!childExperience.website ? null : (
                    <span>
                      <span className="padding-left-right-10">|</span>
                      <a href={childExperience.website} target='_blank' rel='noopener noreferrer'>website</a>
                    </span>
                  )}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: childExperience.description }} />
                <br />
              </div>
              
              // <div key={childIndex}>
              //   <b>{childExperience.name}</b> <span>({childExperience.dates})</span>
              //   <small>test</small>
              // </div>

              // <li key={childIndex}>
              //   {childExperience.name} <span hidden={!childExperience.level}>[{childExperience.level}/5]</span>
              //   <br /> <small><i>{childExperience.subtitle}</i></small>
              // </li>
            ))}
          </section>
        ))}

        <br />
        <br />

        <i>Last updated: {data.experiencesJson.updated_at}</i>

        {/* <p>
          <img src='{images.experience-ef.png}' alt='' />
        </p> */}
      </Layout>
    </>
  )
}