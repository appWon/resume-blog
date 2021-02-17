import React from "react"
import styled from "styled-components"

export const Card = ({ data: { frontmatter, excerpt } }) => {
  return (
    <PostCard>
      <ThumNail src={frontmatter.tumnail} />
      <Content>
        <h4>{frontmatter.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="date">{frontmatter.date}</div>
      </Content>
    </PostCard>
  )
}

const PostCard = styled.article`
  width: 355px;
  height: 350px;
  margin: 15px;
  transition: 0.2s;
  border-radius: 18px;
  box-shadow: 0 0 25px #d5d5d5;

  &:hover {
    transform: rotate(-1deg) translateY(-5px) scale(1.05);
  }
`

const ThumNail = styled.img`
  width: 100%;
  height: 51%;
  object-fit: contain;
`

const Content = styled.div`
  display: flex;
  padding: 10px;
  height: 49%;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-size: 17px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    color: #646464;
  }

  .date {
    margin-top: 10px;
    font-weight: 400;
    font-size: 13px;
    color: #646464;
  }
`
