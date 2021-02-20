import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { PostList } from "../components/postList"
import { useCategory } from "../hooks/useCategory"
import PostPagination from "../components/pageNation"
import { Layout } from "../layout"
import SEO from "../components/seo"

export default function IndexPage({ data, pathContext }) {
  const [category, selectCategory] = useCategory()
  const { currentPage, numPages } = pathContext

  return (
    <Layout>
      <SEO title="블로그" />
      <PostList postList={data.postList} category={category} />
      <PostPagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  )
}

PostList.propTypes = {
  data: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }).isRequired,
}

export const data = graphql`
  query LoadPostQuery($limit: Int, $skip: Int) {
    categories: allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
    postList: allMarkdownRemark(
      filter: { frontmatter: { category: {} } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            category
            title
            date
            tumnail
          }
          fields {
            slug
          }
          excerpt(pruneLength: 80, truncate: false)
        }
      }
    }
  }
`
