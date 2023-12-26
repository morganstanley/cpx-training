import React from 'react';
import { Link, graphql } from 'gatsby';

import Exercises from '../../../components/excercises';
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
        <Exercises nodes={exercises} />
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
        internal: {
          contentFilePath: { regex: "/exercises/makecode/E[0-9]+//" }
        }
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
