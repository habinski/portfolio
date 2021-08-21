import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { articleInfo, articleDiv, categoriesDiv } from '../../css/blog/bigArticleCard.module.scss'

const BigArticleCard = (article) => {
	const { title, url, categories = '', cover, updated_at } = article.article;
	const image = getImage(cover.localFile)
	return (
		<Link className={articleDiv} to={`/blog/${url}`}>
			<GatsbyImage image={image} />
			<div className={articleInfo}>
				{categories !== '' ? <div className={categoriesDiv}>{
					categories.map(c => {
						return <Link to={`/blog/${c.url}`} key={c.id}>{c.name}</Link>
					})
				}</div> : ''}
				<h5>{title}</h5>
				<p>{updated_at}</p>
			</div>
		</Link>
	)
}

export default BigArticleCard;