import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ArticlesComponent from "../components/blog/articles"
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
			absolutePath
          }
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category = () => {
  const data = useStaticQuery(query);
  const articles = data.articles.edges;
  const category = data.category.name;

  return (
    <Layout>
      <div>
        <div>
          <h1>{category}</h1>
          <ArticlesComponent articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export default Category