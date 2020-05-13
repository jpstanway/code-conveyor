import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import PostsNavigation from "../components/posts-navigation"

export const PageHeading = styled.h4`
  color: rgba(0, 0, 0, 0.6);
`

const Index = ({ data }) => {
  const [filter, setFilter] = useState(0)

  const { edges, totalCount } = data.allMarkdownRemark
  const postCount = `${totalCount} post${totalCount > 1 ? "s" : ""}`
  const visiblePosts = edges.slice(filter, filter + 10)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <PageHeading>all posts - {postCount}</PageHeading>
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

Index.defaultProps = {
  data: {},
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

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
