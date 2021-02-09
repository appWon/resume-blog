import React from "react"
import styled from "styled-components"
import { Categories } from "../category"
import { Link } from "gatsby"

export const Header = props => {
  return (
    <HeaderContainer>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          f.e JW
        </Link>
      </Title>
      <Categories />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  background-color: #f7fafa;

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
