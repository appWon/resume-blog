import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "antd/dist/antd.css"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutContainer = styled.div`
  @import "~bootstrap/scss/bootstrap";
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300&display=swap");

  * {
    font-family: "Roboto", sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default Layout
