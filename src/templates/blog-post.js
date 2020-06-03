import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { BlogInfo, BlogDescription } from "../components/post-preview"

const BlogContainer = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 50%);
  padding: 2rem;
  margin-bottom: 20px;

  img {
    display: block;
    margin: 5rem auto;
  }
`

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
      <SEO title={post.frontmatter.title} />
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
