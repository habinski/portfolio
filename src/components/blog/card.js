import React from "react"
import { Link } from "gatsby"

const Card = ({ article }) => {
	return (
		<Link to={`/blog/${article.node.title.replace(/\s/g, '-')}`} className="uk-link-reset">
			<div className="uk-card uk-card-muted">
				<div className="uk-card-media-top">
					<img
						src={article.node.image.absolutePath}
						alt={article.node.image.absolutePath}

					/>
				</div>
				<div className="uk-card-body">
					<p id="category" className="uk-text-uppercase">
						{article.node.category.name}
					</p>
					<p id="title" className="uk-text-large">
						{article.node.title}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default Card