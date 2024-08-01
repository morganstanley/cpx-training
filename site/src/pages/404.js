import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404: Not Found</title>;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
