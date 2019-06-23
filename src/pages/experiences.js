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
          name
          experiences {
            name
            location
            dates
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
            <h3>{experienceGroup.name}</h3>
            {experienceGroup.experiences.map((childExperience, childIndex) => (
              <div key={childIndex}>
                <p className="margin-bottom-0">
                  <b>{childExperience.name}</b>
                  <span className="padding-left-right-10">|</span>
                  {childExperience.location}
                  <span className="padding-left-right-10">|</span>
                  {childExperience.dates}
                </p>
                <small>soon</small>
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