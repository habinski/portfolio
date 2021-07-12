import React from "react"
import { graphql } from "gatsby"

import ArticlesComponent from "../components/blog/articles"
import CategoriesNav from "../components/blog/categoriesNav"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
export const query = graphql`
query Category($id: Int!) {
  articles:  allStrapiArticle(filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
    edges {
      node {
        strapiId
        title
        categories {
          name
        }
        cover {
         url
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

  return (
    <Layout title={data.category.name}>
      <SEO title={data.category.name} />
      <CategoriesNav />
      <div className='blog'>
        <h1>{data.category.category}</h1>
        <ArticlesComponent articles={data.articles.edges} />

      </div>
    </Layout>
  )
}

export default Category