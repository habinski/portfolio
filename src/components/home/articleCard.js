import React from "react"
import { Link } from "gatsby"

import { articleLink, updateDate } from '../../css/home/articleCard.module.scss'

const ArticleCard = (article) => {
	const { categories, title, updated_at, url } = article.article;
	return (
		<Link to={`/blog/${url}`} className={articleLink}>
			<div>
				<p>
					{
						categories.map(category => {
							return <Link to={`/blog/${category.url}`}>{category.name}</Link>
						})
					}
				</p>
				<h3>{title}</h3>
				<p className={updateDate}>{updated_at}</p>
			</div>
		</Link>
	)
}

export default ArticleCard