import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const TrainerPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="trainer-main">
        <article className="hero">
          <img src="images/chelci-beth.jpg" className="background-image" alt="Student with CPX Board" />
          <div className="pane">
            <header className="content">
              <h2>
                <span>Train the Trainer</span>
              </h2>
            </header>
          </div>
        </article>
        <SEO title="About" />
        <article className="content">
          <h2>Mission & Philosophy</h2>
          <p>Train the trainer sessions are a starting point for volunteers of all backgrounds 
            to gather in a space and learn what goes into a Morgan Stanley Makerspace session. 
            There will be a presentation of the curriculum, the opportunity to gain some hands 
            on experience with the CPX device, and a discussion of the philosphy with which we 
            run our makerspaces.</p>
            <p/>
            <p>The Morgan Stanley Makerspaces are designed to introduce participants to coding 
              and making with the Adafruit CPX device as a starting platform.</p>
            <p/>
            <p>The philosophy is one of discovery, experimentation and passion. The curriculum 
              is not used as a test or a required standard to achieved, but a jumping off point.</p>
            <p/>
            <p>We hope that by the end of the session, the participants will have cultivated a 
              desire to delve deeper and learn more about whichever aspect of technology inspired them.</p>
        </article>
      </div >
    </Layout >
  )
}

export default TrainerPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
