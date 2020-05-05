import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Jordan's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview key={node.id} node={node} />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
