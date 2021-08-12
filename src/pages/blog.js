import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"

import CategoriesNav from '../components/blog/categoriesNav'
// import "../assets/css/main.css"
import Seo from '../components/SEO'
import { blog, articlesGrid } from '../css/blog/blog.module.scss'
import BigArticleCard from "../components/blog/bigArticleCard"



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
              url
              content
              updated_at(formatString: "DD MMMM YY")
              categories {
                name
              }
              cover {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }
            }
          }
        }
      }
   `}
      render={data => (
        <section className={blog}>
          <h3 className='title'>BLOG</h3>

          <div className={articlesGrid}>
            {data.allStrapiArticle.edges.map((article) => {
              return (
                <BigArticleCard article={article.node} key={article.node.strapiId} />
              )
            })}
          </div>
        </section>
      )}
    />
  </Layout>
)

export default Blog