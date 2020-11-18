import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
const articleCard = (article) => {

	const coverImg = {
		// width: '100%',
		// height: '50%',
	}
	return (
		<Link to={`/blog/${article.article.node.title.replace(/\s/g, '-')}`} className="article">
			{/* <div className="shadow"></div> */}
			<div className='cover'>
				<Img style={coverImg} fluid={article.article.node.cover.childImageSharp.fluid} />
				<h3>{article.article.node.title}</h3>
			</div>
		</Link>
	)
}

export default articleCard