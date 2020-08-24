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
            <p>There is a lot of information about and projects for the CircuitPlayground Express.</p>
          </article>
          {continuePosts.map(item => {
            const title = item.node.frontmatter.title || item.node.fields.slug
            const node = item.node
            return (
              <article
                key={node.fields.slug}
              >
                <header>
                  <h3>
                    {title}
                  </h3>
                </header>
                <section>
                  <p
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
