import React from "react"
import SEO from "../components/seo"
import { Layout } from "../layout"
import { graphql } from "gatsby"
import { Content } from "../components/content"

export default function PostPage({ data }) {
  return (
    <Layout>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
      />
      <Content data={data.markdownRemark} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        category
      }
      html
    }
  }
`
