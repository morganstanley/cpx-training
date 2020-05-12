import React from "react"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const workPosts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Work" />
      {workPosts.map(work => {
        const title = work.node.frontmatter.title || work.node.fields.slug
        const node = work.node
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
                  fontFamily: `Montserrat`,
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
              style={{
                color: "#888888",
                fontSize: `17px`,
                fontWeight: `300`,
                fontFamily: `Montserrat`,
              }}
            >
              <p
                style={{ marginBottom: `5px` }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <a
                href={node.frontmatter.link}
                target="blank"
                style={{
                  color: `#000000`,
                  fontSize: `15px`,
                  fontWeight: `300`,
                  fontFamily: `Montserrat`,
                }}
              >
                View Project
              </a>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default WorkPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "work" } } }) {
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
