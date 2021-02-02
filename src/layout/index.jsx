import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Header } from "../components/header"

import "antd/dist/antd.css"

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutContainer = styled.div`
  @import "~bootstrap/scss/bootstrap";
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300&display=swap");

  display: flex;

  * {
    font-family: "Roboto", sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`
