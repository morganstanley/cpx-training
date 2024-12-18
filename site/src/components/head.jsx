import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

function PageHead({ title, children }) {
  const data = useStaticQuery(graphql`
    query sitemetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      {children}
    </>
  );
}

export default PageHead;
