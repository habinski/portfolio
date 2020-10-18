import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"
import Img from "gatsby-image"

export const query = graphql`
query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
		childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
      }
    }
  }
 `


const Article = ({ data }) => {
	const article = data.strapiArticle
	const backgroundImage = {
		backgroundImage: 'url(' + article.image.childImageSharp.fluid.src + ')',
	};
	console.log(article.image.childImageSharp);
	console.log(article.content)
	return (
		<Layout title='blog'>
			<div className='post'>
				<div className='head' style={backgroundImage}>
					{/* <img src={article.image.publicURL} alt="" /> */}
					<h1>{article.title}</h1>
					<p>
						<Moment format="MMM Do YYYY">{article.published_at}</Moment>
					</p>
				</div>

				<div className="content">
					<ReactMarkdown source={article.content} />
				</div>
			</div>
		</Layout>
	)
}

export default Article