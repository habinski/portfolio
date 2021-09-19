import React from "react"
import { Link } from "gatsby"
import { motion } from 'framer-motion'
import { articleLink, updateDate } from '../../css/home/articleCard.module.scss'

const ArticleCard = (article) => {
	const { categories, title, updated_at, url } = article.article;
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			transition={{
				type: 'spring',
				duration: 0.3
			}}
		>
			<Link to={`/blog/${url}`} className={articleLink}>
				<div>
					<p>
						{
							categories.map(category => {
								return <Link to={`/blog/${category.url}`} key={category.id}>{category.name}</Link>
							})
						}
					</p>
					<h3>{title}</h3>
					<p className={updateDate}>{updated_at}</p>
				</div>
			</Link>
		</motion.div>
	)
}

export default ArticleCard