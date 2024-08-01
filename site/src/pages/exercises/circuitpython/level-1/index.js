import React from 'react';
import { graphql } from 'gatsby';

import ExerciseList from '../../../../components/exercises';
import Hero from '../../../../components/hero';
import Layout from '../../../../components/layout';

import SetUp from '../../../../../content/exercises/circuitpython/start-here.mdx';

import '../../../../styles/global.css';
import '../../../../styles/style.css';

const CPXLevel1Index = ({ data, location }) => {
  const exercises = data.allMdx.nodes;

  return (
    <Layout location={location}>
      <div className="exercises-main">
        <Hero
          title="CPX Training Workshop"
          subtitle="CircuitPython - Level 1"
        />
        <article className="content">
          <SetUp />
        </article>
        <ExerciseList nodes={exercises} />
      </div>
    </Layout>
  );
};

export default CPXLevel1Index;

export const Head = () => (
  <>
    <title>CircuitPython | Level 1</title>
    <meta
      name="description"
      content="Level 1 CircuitPython curriculum for beginners"
    />
  </>
);

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
          contentFilePath: { regex: "/exercises/circuitpython/level-1//" }
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
          level
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
