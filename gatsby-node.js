const path = require("path")
const _ = require("lodash")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  // fmImagesToRelative(node);
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode })
    const slug = `/${_.kebabCase(filePath)}`
    createNodeField({
      node,
      name: `slug`,
      value: `/archives${slug}`,
    })
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
    //파일명으로 정보를y 얻어옴
    console.log(`\n`, fileNode.relativePath)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("./src/pages/post.js")
  const postListTemplage = path.resolve("./src/pages/postList.js")
  const categoryTemplage = path.resolve(`./src/pages/category.js`)

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
              category
              date
              title
            }
          }
        }
      }
    }
  `)

  const categoryMap = new Map()
  const posts = res.data.allMarkdownRemark.edges

  posts.forEach(({ node }) => {
    createPage({
      component: postTemplate,
      path: node.fields.slug,
      context: {
        slug: node.fields.slug,
      },
    })

    if (node.frontmatter.category) {
      const c = node.frontmatter.category
      if (categoryMap.get(c)) {
        categoryMap.set(c, categoryMap.get(c) + 1)
      } else {
        categoryMap.set(c, 1)
      }
    }
  })

  const postPerpage = 8
  let numPages = Math.ceil(posts.length / postPerpage)

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: postListTemplage,
      context: {
        limit: postPerpage,
        skip: i * postPerpage,
        currentPage: i + 1,
        numPages,
      },
    })
  }

  categoryMap.forEach((count, category) => {
    numPages = Math.ceil(count / postPerpage)
    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path:
          i === 0
            ? `/categories/${_.kebabCase(category)}`
            : `/categories/${_.kebabCase(category)}/${i + 1}`,
        component: categoryTemplage,
        context: {
          category,
          limit: postPerpage,
          skip: i * postPerpage,
          numPages,
          currentPage: i + 1,
        },
      })
    }
  })
}
