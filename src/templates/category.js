import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ArticlesComponent from "../components/blog/articles"
import CategoriesNav from "../components/blog/CategoriesNav"
import Layout from "../components/Layout"

export const query = graphql`
query Category {
  articles: allStrapiArticle   {
    edges {
      node {
        strapiId
        title
        categories {
          category
          id
        }
        cover {
              publicURL
        }
      }
    }
  }
  category: strapiCategory  {
    category
  id
  
  }
}
`
// query Category($id: Int!) {
//   articles: allStrapiArticle(filter: { categories: { id: { eq: $id } } }) {
//     edges {
//       node {
//         strapiId
//         title
//         category {
//           category
//         }
//         cover {
//               publicURL
//         }
//       }
//     }
//   }
//   category: strapiCategory(strapiId: { eq: $id }) {
//     category
//   }
// }
const Category = ({ data }) => {
  console.log()
  const id = data.pageContext.id;
  const articles = data.articles.edges
  const category = data.category.category

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