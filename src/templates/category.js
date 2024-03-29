import React from "react"

import BigArticleCard from "../components/blog/bigArticleCard"
import CategoriesNav from "../components/blog/categoriesNav"
import Layout from "../components/Layout"
import Seo from '../components/SEO'

import { blog, articlesGrid } from '../css/blog/blog.module.scss'


const Category = ({ pageContext }) => {
  const { name, articles } = pageContext.category.node
  return (
    <Layout title={name}>
      <Seo title={name} />
      <CategoriesNav />
      <section className={blog}>
        <h2 className='title'>{name}</h2>
        <div className={articlesGrid}>
          {articles.reverse().map((article) => {
            return (
              <BigArticleCard article={article} key={article.id} />
            )
          })}
        </div>
      </section>

    </Layout>
  )
}

export default Category