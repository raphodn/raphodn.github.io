import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBook, faBookOpen, faBookReader, faHiking } from '@fortawesome/free-solid-svg-icons'
import { faLeanpub, faTwitter, faTwitterSquare, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default () => (
  <>
    <SEO />
    <Layout>
      <h1>About</h1>
      
      <h2>Background</h2>

      <p>
        Born & raised in the French Alps ( <i><a href="https://www.google.fr/maps/place/Grenoble/@45.9918528,0.6514919,6z/" target="_blank" rel="noopener noreferrer">Grenoble</a></i> 🏔),
        I obtained a Master's degree in Telecom & CS at <i>INSA de Lyon</i>.
      </p>

      <p>
        After working 2 years as a Product Engineer (full-stack web development & data science)
        at <i><a href="https://www.ekimetrics.com/" target="_blank" rel="noopener noreferrer">Ekimetrics</a></i> in Paris,
        I relocated in 2017 to South-East Asia to explore new opportunities and challenges.
      </p>

      <p>
        I'm currently working as a full-stack developer for <i><a href="https://www.refinitiv.com/" target="_blank" rel="noopener noreferrer">Refinitiv</a> <a href="https://www.refinitiv.com/en/innovation-labs" target="_blank" rel="noopener noreferrer">Labs</a></i> in Singapore 🇸🇬.
      </p>

      <h2>Professional Experiences & Skills</h2>

      <p>
        I have over 4 years of experience working as a full-stack developer, on a dozen+ different projects, in teams of various sizes and nationalities.
      </p>

      <p>
        I've developed and maintained applications using all kinds of languages, frameworks, databases and cloud providers. I'm most comfortable with Javascript & Python.
      </p>

      <p>
        I enjoy writing clean code and building solid APIs.
      </p>

      <p>
        See <Link to='/skills'>Skills</Link> and <Link to='/experiences'>Experiences</Link> for more details.
      </p>

      <h2>Passions</h2>

      <p>
        <FontAwesomeIcon icon={faBookReader} />&nbsp;
        <b>Fields I care about: </b>
        Data visualization, Cartography, Digital commons, Privacy, Knowledge Management, Social entrepreneurship,
        Data journalism, Education & Civic tech, Blockchain & Decentralization, Graph databases, Zero waste, Sustainability & Resilience,
        Future of food, Maker culture & Low tech, Urbanism & Urbex, Creative code, Contemporary art with a touch of data
      </p>

      <p>
        <FontAwesomeIcon icon={faHiking} />&nbsp;
        <b>A subset of activities I enjoy doing: </b>
        Reading & Learning, Football, Urban cycling, Piano, Snowboard, Sailing, Hiking, Backpacking, Origami, Stargazing
      </p>

      <h2>Elsewhere Online</h2>

      <p>
        <FontAwesomeIcon icon={faTwitter} />&nbsp;
        I (re)tweet stuff <a href="https://twitter.com/raphodn" target="_blank" rel="noopener noreferrer">@raphodn</a>
        <br />
        <FontAwesomeIcon icon={faGithub} />&nbsp;
        Check out my code on <a href="https://github.com/raphodn" target="_blank" rel="noopener noreferrer">Github</a>
        <br />
        <FontAwesomeIcon icon={faAngellist} />&nbsp;
        My professional background on <a href="https://www.linkedin.com/in/raphaelodini/" target="_blank" rel="noopener noreferrer">LinkedIn</a> & <a href="https://angel.co/raphaelodini" target="_blank" rel="noopener noreferrer">AngelList</a>
      </p>

      <h2>Contact</h2>

      <p>
        You can reach out to me through Twitter, or via email (firstname <i className="smaller">dot</i> lastname <i className="smaller">at</i> protonmail <i className="smaller">dot</i> com).
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