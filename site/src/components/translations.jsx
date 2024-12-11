import React, { useCallback, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { tocFragment, allExercisesNodes } from '../fragments/documentation';
import { siteFragment } from '../fragments/site';
import { getAvailableTranslations } from '../utils/translations';

export default function Toc() {
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

  return <></>;
}
