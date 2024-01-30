import React from 'react';
import { graphql } from 'gatsby';

import ExerciseList from '../../../../components/exercises';
import Hero from '../../../../components/hero';
import Layout from '../../../../components/layout';
import Seo from '../../../../components/seo';

import SetUp from '../../../../../content/exercises/circuitpython/start-here.mdx';

import '../../../../styles/global.css';
import '../../../../styles/style.css';

const CPXLevel2Index = ({ data, location }) => {
  const exercises = data.allMdx.nodes;

  return (
    <Layout location={location}>
      <div className="exercises-main">
        <Hero
          title="CPX Training Workshop"
          subtitle="CircuitPython - Level 2"
        />
        <Seo title="CircuitPython | Level 2" />
        <article className="content">
          <SetUp />
        </article>
        <ExerciseList nodes={exercises} />
      </div>
    </Layout>
  );
};

export default CPXLevel2Index;

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
          contentFilePath: { regex: "/exercises/circuitpython/level-2//" }
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
