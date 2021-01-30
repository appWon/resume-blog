import React from "react"
import SEO from "../components/seo"
import { Layout } from "../layout"
import { graphql } from "gatsby"
import { Content } from "../components/content"

export default function PostPage(props) {
  return (
    <Layout>
      <SEO title="블로그" />
      <Content data={props.data.markdownRemark} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
      }
      html
    }
  }
`
