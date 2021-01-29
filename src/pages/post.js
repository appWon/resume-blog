import React from "react"
import { Layout } from "../layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function PostPage(props) {
  return (
    <Layout>
      <SEO title="블로그" />
      <div>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
