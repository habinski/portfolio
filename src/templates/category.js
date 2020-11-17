import React from "react"
import { graphql } from "gatsby"

import ArticlesComponent from "../components/blog/articles"
import CategoriesNav from "../components/blog/categoriesNav"
import Layout from "../components/Layout"

export const query = graphql`
query Category($id: Int!) {
  articles:  allStrapiArticle(filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
    edges {
      node {
        strapiId
        title
        categories {
          category
        }
        cover {
          childImageSharp{
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  category: strapiCategory(strapiId: { eq: $id }) {
    category
  }
}
`


const Category = ({ data }) => {

  return (
    <Layout title={data.category.category}>
      <CategoriesNav />
      <div className='blog'>
        <h1>{data.category.category}</h1>
        <ArticlesComponent articles={data.articles.edges} />

      </div>
    </Layout>
  )
}

export default Category