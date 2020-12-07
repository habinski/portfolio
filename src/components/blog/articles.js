import React from "react"
import ArticleCard from "../home/articleCard"

const Articles = ({ articles }) => {

	return (
		<div className="articles_grid">
			{articles.map((article) => {
				return (
					<ArticleCard article={article} key={article.node.strapiId} />
				)
			})}
		</div>
	)

}

export default Articles