import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="home-main">
        <article><header className="content">
          <h2>Intro to CircuitPython with Adafruit's Circuit Playground Express</h2>
        </header>
          <section className="content">
            <p>An interactive introduction to coding.</p>
          </section>
        </article>
        <SEO title="Workshops" />
        <article>
          <header className="content">
            <h3>
              <Link to={`/exercises`}>
                CPX Training Workshop
                </Link>
            </h3>
          </header>
          <section className="content">
            <p>
              Learn the basics through simple exercises designed to inspire.
          </p>
          </section>
        </article>
        <article>
          <header className="content">
            <h3>
              <Link to={`/exercises`}>
                Train the Trainer
                </Link>
            </h3>
          </header>
          <section className="content">
            <p>
              Learn how to encourage and inspire young coders as a volunteer in a CPX Training Workshop.
          </p>
          </section>
        </article>
        <article>
          <header className="content">
            <h3>
              <Link to={`/exercises`}>
                Make a Makerspace
              </Link>
            </h3>
          </header>
          <section className="content">
            <p>
              Learn what it takes to create a Makerspace for your own community starting with the CPX Training workshop.
          </p>
          </section>
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
