import React from 'react';
import { Link, graphql } from 'gatsby';

import Hero from '../../../components/hero';
import Layout from '../../../components/layout';

import '../../../styles/global.css';
import '../../../styles/style.css';

import Summary from '../../../../content/exercises/makecode/index-summary.mdx';

const MakeCodeIndex = ({ data, location }) => {
  const exercises = data.allMdx.nodes;

  return (
    <Layout location={location}>
      <div className="exercises-main">
        <Hero
          title="Circuit Playground Express with MakeCode"
          subtitle=""
          image="../../images/desk.jpg"
        />
        <article className="content">
          <Summary />
        </article>
        {exercises.map((node) => (
          <article key={node.fields.slug}>
            <header className="content">
              <h3>
                <Link to={node.fields.slug}>
                  Exercise {node.frontmatter.exercise} |{' '}
                  {node.frontmatter.title}
                </Link>
              </h3>
              <p>{node.frontmatter.description}</p>
            </header>
          </article>
        ))}
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
        internal: { contentFilePath: { regex: "/exercises\/makecode/E[0-9]+\//" } }
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
          exercise
          description
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
