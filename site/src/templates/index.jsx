import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Hero from '../components/hero';
import Layout from '../components/layout';
import PageHead from '../components/head';
import SiteMap from '../components/site-map';

const ExerciseIndexTemplate = ({ children, data, pageContext, location }) => {
  const pageTitle = pageContext.frontmatter.title;
  const subTitle = pageContext.frontmatter.subtitle
    ? pageContext.frontmatter.subtitle
    : '';
  const heroImage = getImage(pageContext.frontmatter.heroImage);
  const category = pageContext.frontmatter.category;
  const level = pageContext.frontmatter.level;
  const nodes = data.allMdx.nodes.filter(
    (node) =>
      node.frontmatter.category === category &&
      node.frontmatter.level === level &&
      !!node.frontmatter.exercise
  );

  return (
    <Layout location={location}>
      <GatsbyImage image={heroImage} alt="" />
      <Hero title={pageTitle} subtitle={subTitle} />
      <div className="content">{children}</div>
      <div className="content">
        <SiteMap location={location} nodes={nodes} />
      </div>
    </Layout>
  );
};

export default ExerciseIndexTemplate;

export const Head = ({ pageContext }) => (
  <PageHead title={pageContext.frontmatter.title}>
    <meta name="description" content={pageContext?.description} />
  </PageHead>
);

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        description
        category
        level
      }
      tableOfContents
    }
    allMdx {
      nodes {
        id
        tableOfContents
        frontmatter {
          title
          exercise
          level
          category
          language
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
