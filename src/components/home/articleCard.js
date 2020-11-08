import React from "react"
import { Link } from "gatsby"

const articleCard = (article) => {
	const backgroundImage = {
		backgroundImage: 'url(' + article.article.node.cover.childImageSharp.fluid.src + ')'
	};

	return (
		<Link to={`/blog/${article.article.node.title.replace(/\s/g, '-')}`} className="article">
			{/* <div className="shadow"></div> */}
			<div className='cover' style={backgroundImage}>

				<h3>{article.article.node.title}</h3>
			</div>
		</Link>
	)
}

export default articleCard