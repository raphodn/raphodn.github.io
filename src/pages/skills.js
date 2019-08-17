import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import StarRatingComponent from 'react-star-rating-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasFaStar, faStarHalfAlt as fasFaStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

import SEO from '../components/seo'
import Layout from '../components/layout'

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
        <h1>Skills</h1>

        {data.skillsJson.skillGroups.map((skillGroup, skillGroupIndex) => (
          <section key={skillGroupIndex}>
            <h3>{skillGroup.name}</h3>
            <ul className="margin-top-0">
              {skillGroup.skills.map((childSkill, childIndex) => (
                <li key={childIndex} style={{ marginBottom: '7px' }}>
                  {childSkill.name}&nbsp;
                  <span hidden={!childSkill.level} style={{ verticalAlign: 'sub', fontSize: '0.8em' }}>
                    <StarRatingComponent
                      name={childSkill.name}
                      value={childSkill.level}
                      renderStarIcon={(index, value) => (index <= value) ? <FontAwesomeIcon icon={fasFaStar} /> : <FontAwesomeIcon icon={farFaStar} />}
                      renderStarIconHalf={() => <FontAwesomeIcon icon={fasFaStarHalfAlt} />}
                      starCount={5}
                      starColor='#a9a9b3'
                      emptyStarColor='#a9a9b3'
                    />
                  </span>
                  <br /> <small><i>{childSkill.description}</i></small>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <br />
        <br />

        <i>Last updated: {data.skillsJson.updated_at}</i>
      </Layout>
    </>
  )
}