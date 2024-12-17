import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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

  const [selectedTranslation, setSelectedTranslation] = useState(
    translations[0]
  );

  return (
    <ul>
      {translations.map((translation) => (
        <li>{translation}</li>
      ))}
    </ul>
  );
}
