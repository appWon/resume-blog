const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("./src/pages/post.js")

  const res = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              description
              date
              title
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: postTemplate,
      path: `blog${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  // posts.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: blogPostTemplate,
  //   })
  // })

  // const tags = res.data.tagsGroup.group
  // // Make tag pages
  // tags.forEach(tag => {
  //   createPage({
  //     path: `/tag/`,
  //     component: tagTemplate,
  //     context: {
  //       tag: tag.fieldValue,
  //     },
  //   })
  // })
}
