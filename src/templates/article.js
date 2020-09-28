import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
query ArticleQuery {
	strapiArticle {
	  strapiId
	  title
	  content
	  published_at
	  image {
		absolutePath
	  }
	}
  }
  
 `
// query ArticleQuery($id: Int!) {
//     strapiArticle(strapiId: { eq: $id }) {
//       strapiId
//       title
//       content
//       published_at
//       image {
// 		absolutePath
//       }
//     }
//   }

const Article = ({ data }) => {
	const article = data.strapiArticle
	console.log()
	return (
		<Layout>
			<div>
				<div
					id="banner"
					className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
					data-src={article.image.absolutePath}
					data-srcset={article.image.absolutePath}
					data-uk-img
				>
					<h1>{article.title}</h1>
				</div>

				<div className="uk-section">
					<div className="uk-container uk-container-small">
						<ReactMarkdown source={article.content} />
						<p>
							<Moment format="MMM Do YYYY">{article.published_at}</Moment>
						</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Article