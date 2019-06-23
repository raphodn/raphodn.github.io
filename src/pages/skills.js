import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
// import images from '../images'

// console.log(images)

export default () => {
  const data = useStaticQuery(graphql`
    query {
      skillsJson {
        updated_at(formatString: "DD MMMM YYYY")
        skillGroups {
          name
          skills {
            name
            level
            subtitle
          }
        }
      }
    }
  `)
  
  return (
    <>
      <SEO />
      <Layout>
        <h1>Skills</h1>

        {data.skillsJson.skillGroups.map((skillGroup, skillGroupIndex) => (
          <section key={skillGroupIndex}>
            <h3>{skillGroup.name}</h3>
            <ul className="margin-top-0">
              {skillGroup.skills.map((childSkill, childIndex) => (
                <li key={childIndex}>
                  {childSkill.name} <span hidden={!childSkill.level}>[{childSkill.level}/5]</span>
                  <br /> <small><i>{childSkill.subtitle}</i></small>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <br />

        <i>Last updated: {data.skillsJson.updated_at}</i>

        {/* <p>
          <img src='{images.experience-ef.png}' alt='' />
        </p> */}
      </Layout>
    </>
  )
}