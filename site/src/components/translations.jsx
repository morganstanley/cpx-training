import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Translations() {
  const data = useStaticQuery(graphql`
    query TranslationsQuery {
      allDirectory(filter: { relativeDirectory: { eq: "exercises" } }) {
        nodes {
          base
        }
      }
    }
  `);

  const translations = data.allDirectory.nodes.map((node) => node.base);

  return (
    <ul>
      {translations.map((translation) => {
        const url = `/exercises/${translation}/`;
        return (
          <li>
            <Link to={url}>{translation}</Link>
          </li>
        );
      })}
    </ul>
  );
}
