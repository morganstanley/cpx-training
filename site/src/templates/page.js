import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Hero from '../components/hero';
import Layout from '../components/layout';
import Seo from '../components/seo';

const PageTemplate = ({ children, data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const pageTitle = pageContext.frontmatter.title;
  const subTitle = pageContext.frontmatter.subtitle
    ? pageContext.frontmatter.subtitle
    : '';
  const heroImage = getImage(pageContext.frontmatter.heroImage);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={pageTitle} description={pageContext.description} />
      <GatsbyImage image={heroImage} alt="" />
      <Hero title={pageTitle} subtitle={subTitle} />
      <div className="content">{children}</div>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
      }
      tableOfContents
    }
  }
`;
