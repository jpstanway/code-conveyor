import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import PostsNavigation from "../components/posts-navigation"

export default ({ pageContext, data }) => {
  const [filter, setFilter] = useState(0)

  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  let visiblePosts

  if (totalCount === 0) {
    visiblePosts = <p>No posts available</p>
  } else {
    visiblePosts = edges
      .slice(filter, filter + 10)
      .map(({ node }) => <PostPreview key={node.id} node={node} />)
  }

  return (
    <Layout>
      <div>
        <h1>{`${category.toUpperCase()}S`}</h1>
        <h4>{totalCount} Posts</h4>
        {visiblePosts}
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
  query($category: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { description: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
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
