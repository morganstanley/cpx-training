import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContinuePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const continuePosts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Continue" />
      {continuePosts.map(item => {
        const title = item.node.frontmatter.title || item.node.fields.slug
        const node = item.node
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
                style={{ marginBottom: `5px` }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <a
                href={node.frontmatter.link}
                target="blank"
              >
                Take me there
              </a>
            </section>
          </article>
        )
      })}
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
