import React from "react"
import { Link } from "gatsby"

const articleCard = (article) => {
	const backgroundImage = {
		backgroundImage: 'url(' + article.article.node.image.publicURL + ')',
	};

	return (
		<Link to={`/blog/${article.article.node.title.replace(/\s/g, '-')}`} className="article" style={backgroundImage}>
			{/* <img src={} alt="" /> */}
			{/* <div className="text"> */}
			<h3>{article.article.node.title}</h3>
			{/* </div> */}
		</Link>
	)
}

export default articleCard