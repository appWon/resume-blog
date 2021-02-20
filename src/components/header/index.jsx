import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = props => {
  return (
    <HeaderContainer>
      <Title>
        <Link to="/">Fe JW</Link>
      </Title>
      {navList.map((item, i) => (
        <Category key={i}>
          <Link to={item.url}>{item.label}</Link>
        </Category>
      ))}
    </HeaderContainer>
  )
}

export default React.memo(Header)

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 40px;
  background-color: #f7fafa;
  height: 80px;

  @media screen and (max-width: 768px) {
    padding: 10px 30px;
  }
`

const Title = styled.h1`
  margin: 0;

  a {
    color: black !important;
  }
`

const Category = styled.div``

const navList = [
  {
    label: "categories",
    url: "/categories",
    iconClassName: "fa fa-book-open",
  },
]
