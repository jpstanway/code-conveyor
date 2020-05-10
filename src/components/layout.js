/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import SideMenuButton from "./side-menu-button"
import SideMenu from "../components/side-menu"
import "./layout.css"

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.toggle ? "1fr 25%;" : "1fr;")};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [toggleSideMenu, setToggleSideMenu] = useState(false)

  return (
    <Grid toggle={toggleSideMenu}>
      <div>
        <Header siteTitle={data.site.siteMetadata.title}>
          <SideMenuButton onClick={() => setToggleSideMenu(!toggleSideMenu)} />
        </Header>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </div>
      <SideMenu toggleSideMenu={toggleSideMenu} />
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
