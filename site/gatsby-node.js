const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { order: [DESC, DESC], fields: [frontmatter___level, frontmatter___exercise] }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                template
                title
                tags
                level
                exercise
                category
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create exercise pages.
  function createWorkshopCurriculum(exercises) {
    const exercise = path.resolve(`./src/templates/exercise.js`)

    exercises.forEach((post, index) => {
      const previous = index === exercises.length - 1 ? null : exercises[index + 1].node
      const next = index === 0 ? null : exercises[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: exercise,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  }

  const cp = result.data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === 'exercise' && edge.node.frontmatter.category === 'CircuitPython'
  )

  const mc = result.data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === 'exercise' && edge.node.frontmatter.category === 'MakeCode'
  )

  createWorkshopCurriculum(cp);
  createWorkshopCurriculum(mc);
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
