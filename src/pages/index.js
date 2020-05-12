import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import PostsNavigation from "../components/posts-navigation"

export default ({ data }) => {
  const [filter, setFilter] = useState(0)

  const { edges, totalCount } = data.allMarkdownRemark
  const postCount = `${totalCount} Post${totalCount > 1 ? "s" : ""}`
  const visiblePosts = edges.slice(filter, filter + 10)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Jordan's Blog</h1>
        <h4>{postCount}</h4>
        {visiblePosts.map(({ node }) => (
          <PostPreview key={node.id} node={node} />
        ))}
        <PostsNavigation
          filter={filter}
          setFilter={setFilter}
          postsLength={totalCount}
        />
      </div>
    </Layout>
  )
}

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
