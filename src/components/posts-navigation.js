import React from "react"
import styled from "styled-components"
import Octicon, { LineArrowLeft, LineArrowRight } from "@primer/octicons-react"

const PostsNav = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 10px;
  width: 100%;
`

const PostsNavLink = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  visibility: ${props => (props.disabled ? `hidden;` : `visible;`)}
    
  &:hover {
    color: var(--color-tertiary);
  }

  &:active,
  &:focus {
    outline: none;
  }
`

export default ({ filter, setFilter, postsLength }) => (
  <div>
    <PostsNav>
      <li>
        <PostsNavLink
          onClick={() => setFilter(filter - 10)}
          disabled={filter === 0}
        >
          <Octicon icon={LineArrowLeft} /> newer posts
        </PostsNavLink>
      </li>
      <li>
        <PostsNavLink onClick={() => setFilter(0)} disabled={filter === 0}>
          latest
        </PostsNavLink>
      </li>
      <li>
        <PostsNavLink
          onClick={() => setFilter(filter + 10)}
          disabled={filter + 10 >= postsLength}
        >
          older posts <Octicon icon={LineArrowRight} />
        </PostsNavLink>
      </li>
    </PostsNav>
  </div>
)
