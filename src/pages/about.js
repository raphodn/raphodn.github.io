import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => (
  <>
    <SEO />
    <Layout>
      <h1>About</h1>
      
      <h3>Background</h3>

      <p>
        Born & raised in the French Alps (<a href="https://www.google.fr/maps/place/Grenoble/@45.9918528,0.6514919,6z/" target="_blank" rel="noopener noreferrer">Grenoble</a>),
        I obtained a Master's degree in Telecommunications & CS at <i>INSA de Lyon</i>.
      </p>

      <p>
        After working 2 years as a Product Engineer (full-stack web development & data science)
        at <i><a href="https://www.ekimetrics.com/" target="_blank" rel="noopener noreferrer">Ekimetrics</a></i> in Paris,
        I relocated in 2017 to South-East Asia to explore new opportunities and challenges.
      </p>

      <p>
        I'm currently working as a Full-Stack Developer for <i><a href="https://www.refinitiv.com/" target="_blank" rel="noopener noreferrer">Refinitiv</a> <a href="https://labs.refinitiv.com/About" target="_blank" rel="noopener noreferrer">Labs</a></i> in Singapore.
      </p>

      <h3>Professional Experiences & Skills</h3>

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
        More info <Link to='/skills'>here</Link> !
      </p>

      <h3>Passions</h3>

      <p>
        <b>Fields I care about: </b>
        Data visualization, Cartography, Digital commons, Privacy, Knowledge Management, Social entrepreneurship,
        Data journalism, Education & Civic tech, Blockchain & Decentralization, Graph databases, Zero waste, Sustainability & Resilience,
        Future of food, DIY & Maker culture, Urbanism & Urbex, Creative code, Contemporary art with a touch of data
      </p>

      <p>
        <b>A subset of activities I enjoy doing: </b>
        Reading & Learning, Football, Urban cycling, Piano, Snowboard, Sailing, Hiking, Backpacking, Origami, Stargazing
      </p>

      <h3>Elsewhere Online</h3>

      <p>
        I (re)tweet stuff <a href="https://twitter.com/raphodn" target="_blank" rel="noopener noreferrer">@raphodn</a>
        <br />
        Check out my code on <a href="https://github.com/raphodn" target="_blank" rel="noopener noreferrer">Github</a>
        <br />
        My professional background on <a href="https://www.linkedin.com/in/raphaelodini/" target="_blank" rel="noopener noreferrer">LinkedIn</a> & <a href="https://angel.co/raphaelodini" target="_blank" rel="noopener noreferrer">AngelList</a>
      </p>

      <h3>Contact</h3>

      <p>
        You can reach out to me through Twitter, or via email (firstname <i>dot</i> lastname <i>at</i> gmail <i>dot</i> com)
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