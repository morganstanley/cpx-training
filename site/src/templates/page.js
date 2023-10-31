import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const PageTemplate = ({ children, data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const pageTitle = pageContext.frontmatter.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={pageTitle} description={pageContext.description} />
      {children}
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
      }
      tableOfContents
    }
  }
`;
