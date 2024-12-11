import React from 'react';
import { graphql } from 'gatsby';

import ExerciseList from '../../../../components/exercises';
import Hero from '../../../../components/hero';
import Layout from '../../../../components/layout';

import { siteFragment } from '../../../../fragments/site';

import '../../../../styles/global.css';
import '../../../../styles/style.css';

import Summary from '../../../../../content/exercises/makecode/index-summary.mdx';

const MakeCodeIndex = ({ data, location }) => {
  const exercises = data.allMdx.nodes;

  return (
    <Layout location={location}>
      <div className="exercises-main">
        <Hero
          title="Robotics with MakeCode"
          subtitle=""
          image="../../images/desk.jpg"
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
    <title>MakeCode | Robotics</title>
    <meta name="description" content="MakeCode Robotics Curriculum" />
  </>
);

export const pageQuery = graphql`
  query {
    site {
      ...SiteMetadata
    }
    allMdx(
      filter: {
        internal: {
          contentFilePath: { regex: "/exercises/makecode/robotics/E[0-9]+//" }
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
