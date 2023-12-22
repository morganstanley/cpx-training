const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
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
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create  pages.
  const pages = result.data.allMdx.nodes;
  const exerciseTemplate = path.resolve(`./src/templates/exercise.js`);
  const pageTemplate = path.resolve(`./src/templates/page.js`);

  function getCategory(page) {
    const path = page.internal.contentFilePath;

    return path
      ? path.includes('/circuitpython/')
        ? 'circuitpython'
        : path.includes('/makecode/')
        ? 'makecode'
        : ''
      : '';
  }

  function getTemplate(path) {
    return path?.includes('exercises') ? exerciseTemplate : pageTemplate;
  }

  pages.forEach((page) => {
    const category = getCategory(page);
    const path = page.internal.contentFilePath;
    createPage({
      path: page.fields.slug,
      component: `${getTemplate(path)}?__contentFilePath=${path}`,
      context: {
        id: page.id,
        categoryRegEx: `/${category}//`,
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
