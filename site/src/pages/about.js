import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="about-main">
        <article className="hero">
          <img src="images/happy.jpg" className="background-image" alt="Student with CPX Board" />
          <div className="pane">
            <header className="content">
              <h2>
                <span>Morgan Stanley Makerspace</span>
              </h2>
            </header>
          </div>
        </article>
        <SEO title="About" />
        <article className="content">
          <h2>Morgan Stanley Makerspace</h2>
          <h3>Mission</h3>
          <p>More details coming soon.</p>
        </article>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
