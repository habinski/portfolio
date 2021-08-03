import React from "react"
import { Link } from "gatsby"

import { articleLink } from '../../css/home/articleCard.module.scss'

const ArticleCard = (article) => {
	const { categories, title, updated_at, url } = article.article;
	return (
		<Link to={`/blog/${url}`} className={articleLink}>
			<div>
				<p>
					{
						categories.map(category => {
							return <span>{category.name}</span>
						})
					}
				</p>
				<h3>{title}</h3>
				<p>{updated_at}</p>
			</div>
		</Link>
	)
}

export default ArticleCard