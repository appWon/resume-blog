import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

export const Categories = props => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___description) {
            fieldValue
          }
        }
      }
    `
  )

  const clickCategory = fieldValue => {
    window.history.pushState("", "", `?category=${fieldValue}`)
  }

  return (
    <CategoryList>
      {allMarkdownRemark.group.map(({ fieldValue }) => (
        <li onClick={() => clickCategory(fieldValue)}>{fieldValue}</li>
      ))}
    </CategoryList>
  )
}

const CategoryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: start;

  li {
    cursor: pointer;
  }
`
