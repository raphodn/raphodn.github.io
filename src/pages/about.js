import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBook, faBookOpen, faBookReader, faHiking } from '@fortawesome/free-solid-svg-icons'
import { faLeanpub, faTwitter, faTwitterSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default () => (
  <>
    <SEO />
    <Layout>
      <h1>About</h1>
      
      <h2>Background</h2>

      <p>
        Born & raised in the French Alps ( <i><a href="https://www.qwant.com/maps/place/admin:osm:relation:80348@Grenoble_38000-38100" target="_blank" rel="noopener noreferrer">Grenoble</a></i> 🏔️),
        I obtained a Master's degree in Telecom & CS at <i>INSA de Lyon</i>.
      </p>

      <p>
        After working 2 years as a Product Engineer (full-stack web development & data science)
        at <i><a href="https://www.ekimetrics.com/" target="_blank" rel="noopener noreferrer">Ekimetrics</a></i> in Paris,
        I relocated in 2017 to South-East Asia (Singapore 🇸🇬) to explore new opportunities and challenges.
      </p>

      <p>
        2 and a half years later it was time to move back to France.
        I'm currently working as a freelance full-stack developer for <i><a href="https://beta.gouv.fr/" target="_blank" rel="noopener noreferrer">beta.gouv.fr</a></i>.
      </p>

      <br />

      <h2>Work Experiences & Skills</h2>

      <p>
        I have 8 years of experience working as a full-stack developer, on a dozen+ different projects,
        in teams of various sizes and nationalities.
      </p>

      <p>
        I've developed and maintained applications using all kinds of languages, frameworks, databases and cloud providers.
        I'm most comfortable with Javascript & Python.
      </p>

      <p>
        I enjoy writing clean code and building solid APIs. Open-source by default :)
      </p>

      <p>
        See <Link to='/work'>Work experiences</Link> and <Link to='/skills'>Skills</Link> for more details.
      </p>

      <br />

      <h2>Passions</h2>

      <p>
        <FontAwesomeIcon icon={faBookReader} />&nbsp;
        <b>Fields I care about</b>
        <br />
        Data visualization, Cartography, Digital commons, Privacy, Knowledge Management, Social entrepreneurship,
        Data journalism, Education & Civic tech, Blockchain & Decentralization, Graph databases, Zero waste, Sustainability & Resilience,
        Future of food, Maker culture & Low tech, Urbanism & Urbex, Creative code, Contemporary art with a touch of data
      </p>

      <p>
        <FontAwesomeIcon icon={faHiking} />&nbsp;
        <b>A subset of activities I enjoy doing</b>
        <br />
        Reading & Learning, Football, Hiking, Cycling, Piano, Snowboard, Sailing, Backpacking, Origami, Stargazing
      </p>

      <br />

      <h2>Elsewhere Online</h2>

      <p>
      <FontAwesomeIcon icon={faLinkedin} />&nbsp;
        My professional background on <a href="https://www.linkedin.com/in/raphaelodini/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br />
        <FontAwesomeIcon icon={faGithub} />&nbsp;
        Check out my code on <a href="https://github.com/raphodn" target="_blank" rel="noopener noreferrer">Github</a>
        <br />
        <FontAwesomeIcon icon={faTwitter} />&nbsp;
        I (re)tweet stuff <a href="https://twitter.com/raphodn" target="_blank" rel="noopener noreferrer">@raphodn</a>
      </p>

      <br />

      <h2>Contact</h2>

      <p>
        You can reach out to me via email (firstname <i className="smaller">dot</i> lastname <i className="smaller">at</i> protonmail <i className="smaller">dot</i> com).
      </p>
    </Layout>
  </>
)

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
