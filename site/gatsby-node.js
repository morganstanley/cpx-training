const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMdx {
        nodes {
          id
          tableOfContents
          frontmatter {
            template
            title
            tags
            level
            exercise
            category
            description
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
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create  pages.
  const pages = result.data.allMdx.nodes;
  const exerciseTemplate = path.resolve(`./src/templates/exercise.jsx`);
  const indexTemplate = path.resolve(`./src/templates/index.jsx`);
  const pageTemplate = path.resolve(`./src/templates/page.jsx`);

  function getTemplate(page) {
    const path = page.internal.contentFilePath;
    const isExerciseIndex = path.includes('index') && path.includes('exercise');
    return page.frontmatter.exercise
      ? exerciseTemplate
      : isExerciseIndex
        ? indexTemplate
        : pageTemplate;
  }

  pages.forEach((page) => {
    const category = page.frontmatter.category;
    const path = page.internal.contentFilePath;
    createPage({
      path: page.fields.slug,
      component: `${getTemplate(page)}?__contentFilePath=${path}`,
      context: {
        id: page.id,
        category: category,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
