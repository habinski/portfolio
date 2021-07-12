import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { cover, articleLink } from '../../css/home/articleCard.module.scss'
const articleCard = (article) => {

	const coverImg = {
		width: '100%',
		height: '25rem'
	}
	console.log(article)
	return (
		<Link to={`/blog/${article.article.node.url}`} className={articleLink}>
			<div className={cover}>
				<StaticImage style={coverImg} src={article.article.node.cover.url} />
				<h3>{article.article.node.title}</h3>
			</div>
		</Link>
	)
}

export default articleCard