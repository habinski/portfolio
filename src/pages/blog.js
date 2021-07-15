import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import ArticlesComponent from "../components/blog/articles"
import CategoriesNav from '../components/blog/categoriesNav'
// import "../assets/css/main.css"
import Seo from '../components/SEO'

const Blog = () => (
  <Layout title='blog'>
    <Seo title='Blog' />
    <CategoriesNav />
    <StaticQuery
      query={graphql`
      {
        allStrapiArticle(sort: {order: DESC, fields: published_at}) {
          edges {
            node {
              strapiId
              title
              content
              categories {
                name
              }
              cover {
               url
              }
            }
          }
        }
      }
      `}
      render={data => (
        <section className='blog'>
          <h1>BLOG</h1>
          {/* <div className="blog-content"> */}
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
          {/* </div> */}
        </section>
      )}
    />
  </Layout>
)

export default Blog