import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const ContinuePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Continue" />
      <div className="continue-main">
        <article className="hero">
          <img src="images/happy.jpg" className="background-image" alt="Student with CPX Board" />
          <div className="pane">
            <header className="content">
              <h2>
                <span>Continue Learning</span>
              </h2>
            </header>
          </div>
        </article>
        <div className="content">
          <article>
            <h2>Resources</h2>
            <p>There is a lot of information about and projects for the Circuit Playground Express and CircuitPython!</p>
            <header>
              <h3>
                <a href="https://circuitpython.org" target="_blank" rel="noreferrer">Circuit Playground Express</a>
              </h3>
            </header>
            <section>
              <ul>
                <li><a href="https://circuitpython.org/board/circuitplayground_express/" target="_blank" rel="noreferrer">Circuit Python Downloads</a></li>
                <li><a href="https://circuitpython.readthedocs.io/projects/circuitplayground/en/latest/" target="_blank" rel="noreferrer">Comprehensive Documentation</a></li>
              </ul>
            </section>
            <header>
              <h3>
                <a href="https://circuitpython.org" target="_blank" rel="noreferrer">CircuitPython</a>
              </h3>
            </header>
            <section>
              CircuitPython is not just for the Circuit Playground Express. There are many other boards that use this language. Check out your options and download libraries and firmware at <a href="https://circuitpython.org">CircuitPython.org</a>
            </section>
            <header>
              <h3>
                <a href="https://makecode.adafruit.com/" target="_blank" rel="noreferrer">MakeCode</a>
              </h3>
            </header>
            <section>
              <a href="https://learn.adafruit.com/using-circuit-playground-express-makecode-circuitpython-on-a-chromebook/using-makecode" target="_blank" rel="noreferrer">Using MakeCode with Circuit Playground Express</a>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default ContinuePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "continue" } } }) {
      edges {
        node {
          frontmatter {
            template
            title
            tags
            description
            slug
            category
            link
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
