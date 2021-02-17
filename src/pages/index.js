import React from "react"
import { graphql } from "gatsby"
import { PostList } from "../components/postList"
import { useCategory } from "../hooks/useCategory"
import { Layout } from "../layout"
import styled from "styled-components"
import SEO from "../components/seo"

export default function IndexPage({ data: { categories, postList } }) {
  const [category, selectCategory] = useCategory()
  return (
    <Layout>
      <SEO title="블로그" />
      <PostList postList={postList} category={category} />
    </Layout>
  )
}

export const data = graphql`
  query LoadPostQuery {
    categories: allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
    postList: allMarkdownRemark(filter: { frontmatter: { category: {} } }) {
      edges {
        node {
          frontmatter {
            category
            title
            date
            slug
            tumnail
          }
          excerpt(pruneLength: 80, truncate: false)
        }
      }
    }
  }
`
