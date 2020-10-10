import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"


export const query = graphql`
query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
		publicURL
      }
    }
  }
 `



const Article = ({ data }) => {
	const article = data.strapiArticle
	console.log()
	return (
		<Layout>
			<div className='head'>
				<img src={article.image.publicURL} alt="" />
				<h1>{article.title}</h1>
				<p>
					<Moment format="MMM Do YYYY">{article.published_at}</Moment>
				</p>
			</div>

			<div className="">
				<ReactMarkdown source={article.content} />
			</div>

		</Layout >
	)
}

export default Article