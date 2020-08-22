import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/global.css'
import '../styles/style.css'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === 'post'
  )

  return (
    <Layout location={location} title={siteTitle}>
      <div className="exercises-main">
        <article className="hero">
          <img src="images/desktop.JPG" className="background-image" alt="CPX Board with Lights" />
          <div className="pane">
            <header className="content">
              <h2>
                <span>Intro to CircuitPython with Adafruit's Circuit Playground Express</span>
              </h2>
            </header>
          </div>
        </article>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              key={node.fields.slug}
            >
              <header className="content">
                <h3>
                  <Link
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
              </header>
              <section className="content">
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
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
