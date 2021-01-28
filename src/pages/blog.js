import React, { useState } from "react"
import { graphql } from "gatsby"
import { Category } from "../components/category"
import { PostList } from "../components/postList"
import { useCategory } from "../hooks/useCategory"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

export default function BlogPage({ data: { categories, postList } }) {
  const [category, selectCategory] = useCategory()

  return (
    <Layout>
      <SEO title="블로그" />
      <Category
        categories={categories}
        category={category}
        selectCategory={selectCategory}
      />
      <PostList postList={postList} category={category} />
    </Layout>
  )
}
export const data = graphql`
  query LoadPostQuery {
    categories: allMarkdownRemark {
      group(field: frontmatter___description) {
        fieldValue
      }
    }
    postList: allMarkdownRemark(filter: { frontmatter: { description: {} } }) {
      edges {
        node {
          frontmatter {
            description
            title
            date
            slug
          }
        }
      }
    }
  }
`
// const PostList = styled.div`
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 1050px;
// `

const Post = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    width: 320px;
    margin: 10px;
  }
`

// const Category = styled.div`
//   text-align: start;
//   width: 100%;
//   margin: 15px 0px;
//   padding: 3px 20px;
//   font-size: 20px;
//   font-weight: bold;

//   span {
//     padding: 5px 10px;
//   }
// `
