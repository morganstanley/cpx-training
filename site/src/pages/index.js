import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <div className="home-main">
                <article className="hero">
                    <img src="images/circuitplaygroundexpress.jpg" className="background-image" alt="CPX Board with Lights" />
                    <div className="pane">
                        <header className="content">
                            <h2>
                                <span>Building Community Through Code</span>
                            </h2>
                        </header>
                        <section className="content">
                            <span>
                                Introduction to programming with Adafruit's Circuit Playground Express
                            </span>
                        </section>
                    </div>
                </article>
                <SEO title="Workshops" />
                <article className="hero hero-exercises">
                    <img src="images/student-computer.jpg" className="background-image" alt="Student with CPX Board" />
                    <div className="pane">
                        <header className="content">
                            <h3>
                                <span>
                                    <Link to={`/exercises`}>
                                        CPX Training Workshops
                                    </Link>
                                </span>
                            </h3>
                        </header>
                        <section className="content">
                            <span>
                                An interactive introduction to coding. Learn the basics through simple exercises designed to inspire.
                            </span>
                        </section>
                    </div>
                </article>
                <article className="hero hero-train">
                    <div className="pane">
                        <img src="images/chelci-beth.jpg" className="background-image" alt="Presenters" />
                        <div className="pane">
                            <header className="content">
                                <h3>
                                    <span>
                                        <Link to={`/trainer`}>
                                            Train the Trainer
                                        </Link>
                                    </span>
                                </h3>
                            </header>
                            <section className="content">
                                <span>
                                    Learn how to encourage and inspire young coders as a volunteer in a CPX Training Workshop.
                                </span>
                            </section>
                        </div>
                    </div>
                </article>
                <article className="hero hero-makerspace">
                    <img src="images/teacher-student.jpg" className="background-image" alt="Student and Teacher" />
                    <div className="pane">
                        <header className="content">
                            <h3>
                                <span>
                                    <Link to={`/makerspace`}>
                                        Make a Makerspace
                                    </Link>
                                </span>
                            </h3>
                        </header>
                        <section className="content">
                            <span>
                                Learn what it takes to create a Makerspace for your community.
                            </span>
                        </section>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: [ASC, ASC], fields: [frontmatter___level, frontmatter___exercise] }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            template
            title
            tags
            description
            slug
            category
            level
            exercise
          }
        }
      }
    }
  }
`
