/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type == `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      categories: allMarkdownRemark {
        group(field: frontmatter___description) {
          fieldValue
        }
      }
    }
  `).then(result => {
    // make post pages
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    // make category pages
    result.data.categories.group.forEach(category => {
      createPage({
        path: `/categories/${category.fieldValue}s`,
        component: path.resolve(`./src/templates/category.js`),
        context: {
          category: category.fieldValue,
        },
      })
    })
  })
}
