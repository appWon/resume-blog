import React from "react"
import styled from "styled-components"

export const Content = ({ data: { frontmatter, html } }) => {
  return (
    <PostContent>
      <Title>{frontmatter.title}</Title>
      <SubTitle>
        <WriteDate>{frontmatter.date}</WriteDate>/
        <Category>
          {frontmatter.description.map(category => (
            <span>{category}</span>
          ))}
        </Category>
      </SubTitle>
      <MarkDownData dangerouslySetInnerHTML={{ __html: html }} />
    </PostContent>
  )
}

const PostContent = styled.div`
  margin: 30px 0;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  text-align: center;
`

const SubTitle = styled.div`
  margin-bottom: 20px;
  text-align: center;
  color: gray;
`

const WriteDate = styled.span`
  margin: 0 10px;
`
const Category = styled.span`
  margin: 0 10px;

  span {
    margin: 0 5px;
  }
`
const MarkDownData = styled.div`
  max-width: 1080px;

  p {
    white-space: nowrap;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 23px;
  }

  p {
    font-size: 16px;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  pre {
    white-space: pre-wrap;
  }

  @media screen and (max-width: 500px) {
    padding: 0 5px;

    img {
      width: 500px;
    }
  }
`
