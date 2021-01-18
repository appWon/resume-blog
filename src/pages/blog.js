import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Card, Avatar } from "antd"
import styled from "styled-components"

const { Meta } = Card

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="블로그" />
      <Post>
        {data.allMarkdownRemark.edges.map(
          (
            {
              node: {
                frontmatter: { slug, title, date },
              },
            },
            index
          ) => {
            return (
              <Link to={`/${slug}`}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  <div key={index}>{title}</div>
                  <div key={index}>{date}</div>
                </Card>
              </Link>
            )
          }
        )}
      </Post>
    </Layout>
  )
}

const Post = styled.div`
  display: flex;

  a {
    margin: 10px;
  }
`
