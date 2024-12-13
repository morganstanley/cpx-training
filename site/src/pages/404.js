import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import PageHead from '../components/head';
import SiteMap from '../components/site-map';

import { siteFragment } from '../fragments/site';

const NotFoundPage = ({ data, location }) => {
  const nodes = data.allMdx.nodes;

  return (
    <Layout location={location}>
      <div className="content">
        <h2>404 Not Found</h2>
        <p>
          Sorry, the url you're looking for appears to be missing. Check out the
          sitemap below to find your expected page.
        </p>
        <SiteMap location={location} nodes={nodes} />
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <PageHead title="404 Not Found"></PageHead>;

export const pageQuery = graphql`
  query {
    site {
      ...SiteMetadata
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
