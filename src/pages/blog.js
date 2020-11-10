import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import ArticlesComponent from "../components/blog/articles"
import CategoriesNav from '../components/blog/categoriesNav'
// import "../assets/css/main.css"

const Blog = () => (
  <Layout title='blog'>
    <CategoriesNav />
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                content
                categories {
                  category
                }
                cover {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100)
                      {
                            ...GatsbyImageSharpFluid
                          }
                        }
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