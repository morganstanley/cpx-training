import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContinuePage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Continue" />
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
                                <a href="https://circuitpython.org">Circuit Playground Express</a>
                            </h3>
                        </header>
                        <section>
                            <a href="https://circuitpython.org/board/circuitplayground_express/">Circuit Python Downloads</a>
                            <a href="https://circuitpython.readthedocs.io/projects/circuitplayground/en/latest/">Comprehensive Documentation</a>
                        </section>
                        <header>
                            <h3>
                                <a href="https://circuitpython.org">CircuitPython</a>
                            </h3>
                        </header>
                        <section>
                            CircuitPython is not just for the Circuit Playground Express. There are many other boards that use this language. Check out your options and download libraries and firmware at <a href="https://circuitpython.org">CircuitPython.org</a>
                        </section>
                        <header>
                            <h3>
                                <a href="https://makecode.adafruit.com/">MakeCode</a>
                            </h3>
                        </header>
                        <section>
                          <a href="https://learn.adafruit.com/using-circuit-playground-express-makecode-circuitpython-on-a-chromebook/using-makecode">Using MakeCode with Circuit Playground Express</a>
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
