import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ siteTitle, children }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <HeaderContainer
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <img
          src="https://res.cloudinary.com/mtninja/image/upload/v1589312573/code-conveyor/code-conveyor.png"
          alt={siteTitle}
          style={{
            marginLeft: `-26px`,
            marginBottom: `0`,
          }}
        />
      </Link>
      {children}
    </HeaderContainer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
