import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/style.css'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === "post"
  )

  return (
    <Layout location={location} title={siteTitle}>
      <h2>Intro to CircuitPython with Circuit Playground Express</h2>
      <p>If you haven't set up your Circuit Playground Express, go ahead and refer to the Setup section of the site.</p>
      <hr />
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            key={node.fields.slug}
          >
            <header>
              <h3>
                <Link
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
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
