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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  padding: 15px;
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
    white-space: pre-wrap;
    font-size: 18px;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  pre {
    white-space: pre-wrap;
    border-radius: 15px;
  }

  @media screen and (max-width: 700px) {
    pre {
      font-size: 10px;
    }
  }
`
