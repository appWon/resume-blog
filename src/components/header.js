import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = props => (
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
    <Category>
      <Link
        to="/project"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <span>#</span>프로젝트
      </Link>
      <Link
        to="/blog"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <span>#</span>블로그
      </Link>
    </Category>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 150px;
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

const Category = styled.div`
  display: flex;
  align-items: center;

  * {
    font-size: 30px;
    font-weight: bold;
    color: black;
  }

  a {
    color: black !important;
    margin-left: 30px;
    span {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    a {
      margin-left: 10px;
    }
  }
`
export default Header
