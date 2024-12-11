import { graphql } from 'gatsby';

export const siteFragment = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      title
    }
  }
`;
