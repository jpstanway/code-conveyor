import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { BlogDescription } from "./post-preview"

const SideMenuContainer = styled.div`
  background-color: var(--color-dark-bg);
  color: white;
  display: ${props => (props.toggle ? "block;" : "none;")}
  height: 100vh;
  padding: 20px;
`

const SideMenuHeading = styled.h4`
  margin-bottom: 0.5rem;

  &:not(:first-child) {
    margin-top: 10px;
  }
`

const AboutText = styled.p`
  font-size: 0.8rem;
  color: var(--color-light-bg);
`

const SideMenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  li:not(:last-child) {
    margin-right: 5px;
  }
`

export default ({ toggleSideMenu }) => {
  const postTypes = ["video", "guide", "thought"]

  return (
    <SideMenuContainer toggle={toggleSideMenu}>
      <SideMenuHeading>About Code Conveyor</SideMenuHeading>
      <AboutText>
        Hi, I'm Jordan. This is my blog where I share all my secrets (well, not
        all of them). I'm a developer who makes stuff mostly in the JavaScript
        ecosystem. Hopefully I can teach you a thing or two.
      </AboutText>
      <SideMenuHeading>Categories</SideMenuHeading>
      <SideMenuList>
        {postTypes.map(postType => (
          <li key={postType}>
            <Link to={`/categories/${postType}s`}>
              <BlogDescription description={postType}>
                {postType}
              </BlogDescription>
            </Link>
          </li>
        ))}
      </SideMenuList>
      <SideMenuHeading>Links</SideMenuHeading>
      <a
        href="https://www.facebook.com/codeconveyor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    </SideMenuContainer>
  )
}
