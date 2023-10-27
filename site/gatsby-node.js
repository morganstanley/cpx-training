const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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
  )

  if (result.errors) {
    throw result.errors
  }

  // Create  pages.
  const pages = result.data.allMdx.nodes
  const exercise = path.resolve(`./src/templates/exercise.js`)

  function getCategory(page) {
    const path = page.internal.contentFilePath

    return path
      ? path.includes('/circuitpython/')
        ? 'circuitpython'
        : path.includes('/makecode/')
        ? 'makecode'
        : ''
      : ''
  }

  function getTemplate(category) {
    return category
      ? category.includes('news')
        ? newsTemplate
        : category.includes('contribute')
        ? contributeTemplate
        : pageTemplate
      : pageTemplate
  }

  pages.forEach((page, index) => {
    createPage({
      path: page.fields.slug,
      component: `${exercise}?__contentFilePath=${page.internal.contentFilePath}`,
      context: {
        id: page.id,
        category: getCategory(page),
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
