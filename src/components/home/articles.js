import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import ArticleCard from "./articleCard"
import {
	articlesSection,
	articlesBlck, btnMore
} from '../../css/home/articlesSection.module.scss'
const query = graphql`
{
	allStrapiArticle(limit: 3, sort: {fields: updated_at, order: DESC}) {
	  edges {
		node {
		  categories {
			name
			id
		  }
		  title
		  url
		  updated_at
		  id
		  cover {
			  url
			
		  }
		}
	  }
	}
  }
  
`

const ArticlesBlock = () => {
	const data = useStaticQuery(query)
	const articles = data.allStrapiArticle.edges.map(article => {
		return (
			<ArticleCard article={article} key={article.node.id}></ArticleCard>
		)

	})
	return (
		<section className={articlesSection}>
			<h2 className='title'>blog</h2>
			<div className={articlesBlck}>
				{articles}
				<Link className={btnMore} data-text="more" to="/blog">more</Link>
			</div>
		</section >
	)
}
export default ArticlesBlock

