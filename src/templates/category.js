import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ArticlesComponent from "../components/blog/articles"
import CategoriesNav from "../components/blog/CategoriesNav"
import Layout from "../components/layout"

export const query = graphql`
  query Category($id: Int!) {
    articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          title
          category {
            name
          }
          image {
            		publicURL
          }
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category = ({ data }) => {
  console.log(data)
  const articles = data.articles.edges
  const category = data.category.name

  return (
    <Layout>
      <CategoriesNav />
      <div className='blog'>

        <h1>{category}</h1>
        <ArticlesComponent articles={articles} />

      </div>
    </Layout>
  )
}

export default Category