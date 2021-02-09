import React, { useMemo, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Card } from "./card"

export const PostList = ({ postList, category }) => {
  const postFilter = useMemo(() =>
    category !== "All"
      ? postList.edges.filter(({ node }) =>
          node.frontmatter.category.some(item => item === category)
        )
      : postList.edges
  )

  return (
    <Posts>
      {postFilter.map(({ node }, index) => (
        <Link to={node.frontmatter.slug} key={index}>
          <Card data={node} />
        </Link>
      ))}
    </Posts>
  )
}

const Posts = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1920px;
  padding: 10px;
`
