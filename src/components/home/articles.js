import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ArticleCard from "./articleCard"
// import ReactMarkdown from "react-markdown"
const query = graphql`
{
    allStrapiArticle(limit: 3, sort: {fields: updated_at, order: DESC}) {
		edges {
			node {
        category {
          name
          id
        }
        title
        updated_at
        content
        id
        image {
          publicURL
        }
      }
    } }
  }
`
const ArticlesBlock = () => {
	const data = useStaticQuery(query)
	const articles = data.allStrapiArticle.edges.map(article => {
		console.log(article)
		return (
			<ArticleCard article={article}></ArticleCard>
		)

	})
	return (
		<section className='articles'>
			<h2 className='title'>blog</h2>
			<div className="articles-block">
				{articles}</div>
		</section>
	)
}
export default ArticlesBlock

