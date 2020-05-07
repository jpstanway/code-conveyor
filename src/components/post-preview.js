import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const getDescriptionStyle = description => {
  switch (description.toLowerCase()) {
    case "video":
      return `var(--color-primary)`
    case "guide":
      return `var(--color-secondary)`
    case "thought":
      return `var(--color-tertiary)`
    default:
      return `black`
  }
}

export const BlogContainer = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 50%);
  padding: 2rem;
  margin-bottom: 20px;
`

export const BlogLink = styled(Link)`
  text-decoration: none;
`

export const BlogInfo = styled.p`
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.8rem;
  margin-bottom: 20px;
`

export const BlogTitle = styled.h3`
  margin-bottom: 0;
`

export const BlogDescription = styled.span`
  background-color: ${props => getDescriptionStyle(props.description)};
  border: 0.5px solid black;
  border-radius: 4px;
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 1.1px;
  padding: 2px 5px;
  text-transform: uppercase;
`

export default ({ node }) => (
  <BlogContainer>
    <BlogLink to={node.fields.slug}>
      <BlogTitle>{node.frontmatter.title}</BlogTitle>
    </BlogLink>
    <BlogInfo>
      Posted on: {node.frontmatter.date} |{" "}
      <BlogDescription description={node.frontmatter.description}>
        {node.frontmatter.description}
      </BlogDescription>
    </BlogInfo>
    <p>{node.excerpt}</p>
  </BlogContainer>
)
