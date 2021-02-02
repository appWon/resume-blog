import React from "react"
import styled from "styled-components"

export const Content = ({ data: { frontmatter, html } }) => {
  return (
    <PostContent>
      <Title>{frontmatter.title}</Title>
      <SubTitle>
        <WriteDate>{frontmatter.date}</WriteDate>/
        <Category>
          {frontmatter.category.map(category => (
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
  overflow: auto;
  padding: 30px 20px;
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
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
  max-width: 800px;

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
    padding: 20px;
    white-space: pre-wrap;
    border-radius: 15px;
  }

  @media screen and (max-width: 900px) {
    max-width: 550px;

    p {
      font-size: 15px;
    }

    pre {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 450px;

    p {
      font-size: 13px;
    }

    pre {
      font-size: 11px;
    }
  }
`
