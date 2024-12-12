import React, { useCallback, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { tocFragment, allExercisesNodes } from '../fragments/exercises';
import { siteFragment } from '../fragments/site';
import { getAvailableTranslations } from '../utils/translations';

export default function Translations() {
  const data = useStaticQuery(graphql`
    query TocQuery {
      site {
        ...SiteMetadata
      }
      allDirectory(filter: { relativeDirectory: { eq: "exercises" } }) {
        ...AllExerciseDirectories
      }
    }
  `);

  const translations = data.allDirectory.nodes
    .reverse()
    .map((node) => node.base);

  const [selectedTranslation, setSelectedVTranslation] = useState(
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
