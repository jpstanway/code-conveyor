import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import PostsNavigation from "../components/posts-navigation"

import { PageHeading } from "../pages/index"

const Category = ({ pageContext, data }) => {
  const [filter, setFilter] = useState(0)

  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const postCount = `${totalCount} post${totalCount > 1 ? "s" : ""}`
  const visiblePosts = edges.slice(filter, filter + 10)

  const formatTitleTag = `${category.charAt(0).toUpperCase()}${category.slice(
    1
  )}s`

  return (
    <Layout>
      <SEO title={formatTitleTag} />
      <div>
        <PageHeading>
          {category}s - {postCount}
        </PageHeading>
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

Category.defaultProps = {
  pageContext: {},
  data: {},
}

Category.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default Category

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
