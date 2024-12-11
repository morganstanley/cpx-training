import { graphql } from 'gatsby';

export const tocFragment = graphql`
  fragment MdxTableOfContents on MdxConnection {
    nodes {
      id
      excerpt
      tableOfContents
      frontmatter {
        title
      }
      internal {
        contentFilePath
      }
      fields {
        slug
      }
    }
  }
`;

export const allExerciseNodes = graphql`
  fragment AllExerciseDirectories on DirectoryConnection {
    nodes {
      base
    }
  }
`;
