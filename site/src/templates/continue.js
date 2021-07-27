import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContinueTemplate = ({ data, location }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article className="content">
                <header>
                    <h2>
                        {post.frontmatter.title}
                    </h2>
                    <p>
                        {post.frontmatter.category}
                    </p>
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </Layout>
    )
}

export default ContinueTemplate

export const pageQuery = graphql`
  query ContinueBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
      }
    }
  }
`
