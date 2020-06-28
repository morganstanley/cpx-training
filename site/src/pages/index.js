import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

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
            style={{
              marginTop: `-15px`,
              marginBottom: `70px`,
            }}
          >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 10),
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    color: "#000000",
                    fontSize: `21px`,
                    fontWeight: `400`,
                    fontFamily: `Montserrat`,
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
            </header>
            <section
              style={{ color: "#888888", fontSize: `17px`, fontWeight: `300` }}
            >
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
