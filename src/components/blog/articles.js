import React from "react"
import ArticleCard from "../home/articleCard"

const Articles = ({ articles }) => {
	const leftArticlesCount = Math.ceil(articles.length / 5)
	const leftArticles = articles.slice(0, leftArticlesCount)
	const rightArticles = articles.slice(leftArticlesCount, articles.length)

	return (
		<div>
			<div>
				<div>
					{leftArticles.map((article, i) => {
						return (
							<ArticleCard article={article} key={`article__${article.node.id}`} />
						)
					})}
				</div>
				<div>
					<div>
						{rightArticles.map((article, i) => {
							return (
								<ArticleCard article={article} key={`article__${article.node.id}`} />
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Articles