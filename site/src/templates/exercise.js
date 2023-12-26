import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

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
      <Seo title={pageTitle} description={pageContext.description} />
      <article className="exercise-main content">
        <nav className="nav exercise-nav">
          <ul>
            {nodes.map((node) => {
              const current = location.pathname.includes(node.fields.slug);
              const title = node.frontmatter.title;
              return (
                <li className={current ? 'current' : ''}>
                  <Link to={node.fields.slug}>
                    {node.frontmatter.exercise} ) {title}
                  </Link>
                  {current && (
                    <nav className="nav exercise-content-nav">
                      <ul>
                        {toc &&
                          toc.map((item) => (
                            <li>
                              <Link to={item.url}>{item.title}</Link>
                            </li>
                          ))}
                      </ul>
                    </nav>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
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
          exercise
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
