import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../../components/layout';

import '../../../styles/global.css';
import '../../../styles/style.css';

import Summary from '../../../../content/exercises/makecode/index-summary.mdx';

const MakeCodeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const exercises = data.allMdx.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <div className="exercises-main">
        <Summary />
        {exercises.map((node) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header className="content">
                <h3>
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
              </header>
              <section className="content">
                {node.frontmatter.description}
              </section>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default MakeCodeIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/exercises/makecode//" } }
      }
      sort: [
        { frontmatter: { level: ASC } }
        { frontmatter: { exercise: ASC } }
      ]
    ) {
      nodes {
        id
        tableOfContents
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
