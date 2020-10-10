import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ArticlesComponent from "../components/blog/articles"

// import "../assets/css/main.css"

const Blog = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                content
                category {
                  name
                }
                image {
			          	publicURL
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