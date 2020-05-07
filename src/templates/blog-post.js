import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

import {
  BlogContainer,
  BlogInfo,
  BlogDescription,
} from "../components/post-preview"

const PostTitle = styled.h1`
  margin: 0;
`

const defaultImage = {
  location:
    "https://res.cloudinary.com/mtninja/image/upload/v1588892112/code-conveyor/cc-blog-default.jpg",
  alt: "code on a screen",
}

export default ({ data }) => {
  const post = data.markdownRemark
  const image = post.frontmatter.image ? post.frontmatter.image : defaultImage

  return (
    <Layout>
      <div>
        <img src={image.location} alt={image.alt} />
      </div>
      <BlogContainer>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <BlogInfo>
          Posted on: {post.frontmatter.date} |{" "}
          <BlogDescription description={post.frontmatter.description}>
            {post.frontmatter.description}
          </BlogDescription>
        </BlogInfo>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogContainer>
      <BlogContainer>comments</BlogContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
        image {
          location
          alt
        }
      }
    }
  }
`
