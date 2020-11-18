import React from "react"
import ArticleCard from "../home/articleCard"

const Articles = ({ articles }) => {
	console.log(articles)
	return (
		<div className="articles_grid">
			{articles.map((article) => {
				return (
					<ArticleCard article={article} key={`article__${article.node.id}`} />
				)
			})}
		</div>
	)

}

export default Articles