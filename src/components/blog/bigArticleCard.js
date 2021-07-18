import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { articleInfo, articleDiv } from '../../css/blog/bigArticleCard.module.scss'

const BigArticleCard = (article) => {
	const { title, url, content, categories, cover, updated_at } = article.article;
	const image = getImage(cover.localFile)
	console.log(categories)
	return (
		<Link className={articleDiv} to={`/blog/${url}`}>
			<GatsbyImage image={image} />
			<div className={articleInfo}>
				<p>{
					categories.map(c => {
						return <span>{c.name} </span>
					})
				}</p>
				<h5>{title}</h5>
				<p>{updated_at}</p>
			</div>
		</Link>
	)
}

export default BigArticleCard;