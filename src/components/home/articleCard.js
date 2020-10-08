import React from "react"
import ReactMarkdown from "react-markdown"
import { Link } from "gatsby"

const articleCard = (article) => {

	return (
		<Link to={`/blog/${article.article.node.title.replace(/\s/g, '-')}`} className="article">
			<img src={article.article.node.image.publicURL} alt="" />
			<div className="text">
				<h3>{article.article.node.title}</h3>
				<p>	<ReactMarkdown source={article.article.node.content.slice(0, 250) + '...'} /></p>
			</div>
			{/* <div className='categories'>
				{article.article.node.category.map((c) => {
					return (
						<p>{c.name}</p>
					)
				})}
			</div> */}
		</Link>
	)
}

export default articleCard