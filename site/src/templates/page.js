import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Hero from '../components/hero';
import Layout from '../components/layout';

const PageTemplate = ({ children, pageContext, location }) => {
  const pageTitle = pageContext.frontmatter.title;
  const subTitle = pageContext.frontmatter.subtitle
    ? pageContext.frontmatter.subtitle
    : '';
  const heroImage = getImage(pageContext.frontmatter.heroImage);

  return (
    <Layout location={location}>
      <GatsbyImage image={heroImage} alt="" />
      <Hero title={pageTitle} subtitle={subTitle} />
      <div className="content">{children}</div>
    </Layout>
  );
};

export default PageTemplate;

export const Head = ({ pageContext }) => (
  <>
    <title>{pageContext.title}</title>
    <meta name="description" content={pageContext?.description} />
  </>
);

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      ...SiteMetadata
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        description
      }
      tableOfContents
    }
  }
`;
