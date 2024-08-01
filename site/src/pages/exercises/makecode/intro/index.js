import React from 'react';
import { graphql } from 'gatsby';

import ExerciseList from '../../../../components/exercises';
import Hero from '../../../../components/hero';
import Layout from '../../../../components/layout';

import '../../../../styles/global.css';
import '../../../../styles/style.css';

import Summary from '../../../../../content/exercises/makecode/index-summary.mdx';

const MakeCodeIndex = ({ data, location }) => {
  const exercises = data.allMdx.nodes;

  return (
    <Layout location={location}>
      <div className="exercises-main">
        <Hero
          title="Circuit Playground Express with MakeCode"
          subtitle=""
          image="../../../images/desk.jpg"
        />
        <article className="content">
          <Summary />
        </article>
        <ExerciseList nodes={exercises} />
      </div>
    </Layout>
  );
};

export default MakeCodeIndex;

export const Head = () => (
  <>
    <title>Circuit Playground Express with MakeCode</title>
    <meta
      name="description"
      content="Circuit Playground Express with MakeCode for beginning coders"
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
          contentFilePath: { regex: "/exercises/makecode/intro/E[0-9]+//" }
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
