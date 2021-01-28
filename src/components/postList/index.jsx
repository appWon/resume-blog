import React, { useMemo } from "react"
import { Link } from "gatsby"
import { Card } from "antd"

export const PostList = ({ postList, category }) => {
  const postFilter = useMemo(() =>
    category !== "All"
      ? postList.edges.filter(({ node }) =>
          node.frontmatter.description.some(item => item === category)
        )
      : postList.edges
  )

  return postFilter.map(({ node }, index) => (
    <Link to={node.frontmatter.slug} key={index}>
      <Card>
        <div>{node.frontmatter.title}</div>
        <div>{node.frontmatter.date}</div>
      </Card>
    </Link>
  ))
}
