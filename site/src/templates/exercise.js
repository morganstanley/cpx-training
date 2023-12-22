import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const ExerciseTemplate = ({ children, pageContext, location }) => {
  const pageTitle = pageContext.frontmatter.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location}>
      <Seo title={pageTitle} description={pageContext.description} />
      <article className="exercise-main content">
        <header>
          <h2>{pageTitle}</h2>
        </header>
        {children}
      </article>

      <nav className="content">
        <ul className="exercise-nav">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default ExerciseTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      tableOfContents
    }
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/exercises//" } } }
      sort: [{ frontmatter: { exercise: ASC, level: ASC } }]
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
        }
        internal {
          contentFilePath
        }
        fields {
          slug
        }
      }
    }
  }
`;
