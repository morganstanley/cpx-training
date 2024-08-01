import React from 'react';
import { Link, graphql } from 'gatsby';

import ExerciseNav from '../components/exercise-nav';
import Layout from '../components/layout';

function nextPrev(nodes, location) {
  const len = nodes.length;
  const current = nodes.findIndex((node) =>
    location.pathname.includes(node.fields.slug)
  );
  const prevNode = current !== 0 ? nodes[current - 1] : false;
  const nextNode = current !== len - 1 ? nodes[current + 1] : false;
  return [nextNode, prevNode];
}

const ExerciseTemplate = ({ children, data, pageContext, location }) => {
  const pageTitle = pageContext.frontmatter.title;
  const toc = data.mdx.tableOfContents.items;
  const nodes = data.allMdx.nodes;
  const [next, previous] = nextPrev(nodes, location);

  return (
    <Layout location={location}>
      <article className="exercise-main content">
        <ExerciseNav location={location} nodes={nodes} toc={toc} />
        <div className="exercise-content">
          <header>
            <h2>{pageTitle}</h2>
          </header>
          {children}
        </div>
      </article>

      <nav className="content">
        <ul className="exercise-nav">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← Exercise {previous.frontmatter?.exercise} |{' '}
                {previous.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                Exercise {next.frontmatter?.exercise} |{' '}
                {next.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default ExerciseTemplate;

export const Head = ({ pageContext }) => (
  <>
    <title>
      {pageContext.title} | Level {pageContext.level} | Exercise{' '}
      {pageContext.exercise}
    </title>
    <meta name="description" content={pageContext.description} />
  </>
);

export const pageQuery = graphql`
  query ($id: String!, $category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        level
        exercise
      }
      internal {
        contentFilePath
      }
      tableOfContents
    }
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
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
          exercise
          level
          category
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
