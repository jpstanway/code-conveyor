import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import styled from "styled-components"

import Layout from "../components/layout"

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

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const image = post.frontmatter.image ? post.frontmatter.image : defaultImage

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.frontmatter.title },
  }

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
      <BlogContainer>
        <DiscussionEmbed {...disqusConfig} />
      </BlogContainer>
    </Layout>
  )
}

BlogPost.defaultProps = {
  data: {},
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

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
