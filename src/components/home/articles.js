import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ArticleCard from "./articleCard"
// import ReactMarkdown from "react-markdown"
const query = graphql`
{
    allStrapiArticle(limit: 3, sort: {fields: updated_at, order: DESC}) {
		edges {
			node {
				categories {
          category
          id
        }
        title
        updated_at
        id
		cover {
			childImageSharp {
			  fluid(maxWidth: 500, quality: 100)
				{
					  ...GatsbyImageSharpFluid
					}
				  }
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

