import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const ExerciseTemplate = ({ children, data, pageContext, location }) => {
  const pageTitle = pageContext.frontmatter.title;
  const nodes = data.allMdx.nodes;

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
        <ul className="toc">
          {nodes.map((node) => {
            const current = location.pathname.includes(node.fields.slug);
            const title = node.frontmatter.title;
            return (
              <li className={current ? 'current' : ''}>
                <Link to={node.fields.slug}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Layout>
  );
};

export default ExerciseTemplate;

export const pageQuery = graphql`
  query ($id: String!, $categoryRegEx: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      internal {
        contentFilePath
      }
      tableOfContents
    }
    allMdx(
      filter: {
        internal: { contentFilePath: { regex: $categoryRegEx } }
        frontmatter: { exercise: { ne: null } }
      }
      sort: [
        { frontmatter: { level: ASC } }
        { frontmatter: { exercise: ASC } }
      ]
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
