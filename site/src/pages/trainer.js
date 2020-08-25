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
          <h2>Mission</h2>
          <p>The Morgan Stanley Makerspace works towards two of the Firm's core values: Give back and diversity and inclusion.</p>
          <h3>Give Back</h3>
          <p></p>
          <h3>Commit to Diversity and Inclusion</h3>
          <p>More details coming soon.</p>
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
