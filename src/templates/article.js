import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/Layout"

/*
todo:
1. добавити gatsby-image в md
2.вигадати як перекидувати на інші статті по темі
	чорнетка
	1. передавати categoories з gatsby-node
	2. створити ще один компонент котрий буде робити ще один запит
*/
export const query = graphql`
query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
	  published_at
	  categories {
		  category
	  }
      cover {
		childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
      }
	}

  }
 `


const Article = ({ data }) => {
	const article = data.strapiArticle

	const tags = article.categories.map(category => {
		return (
			<p><Link to={`/category/${category.category.replace(/\s/g, '-')}`}>{category.category}</Link></p>
		)
	})
	const coverImg = {
		width: '100vw',
		height: '50vh'
	}

	return (
		<Layout title='blog'>
			<div className='post'>
				<div className='head' >
					<div className="header-info">
						<h1>{article.title}</h1>
						<div className="info">
							<p><Moment format="MMMM Do YYYY">{article.published_at}</Moment></p>
							<p>{Math.round(article.content.length / 600) + ' minutes read'}</p>
						</div>
					</div>
					<Img style={coverImg} fluid={article.cover.childImageSharp.fluid} alt="cover" />
				</div>

				<div className="content">
					<ReactMarkdown source={article.content} />
					<div className="tags">
						{tags}
					</div>
				</div>
			</div>
		</Layout >
	)
}

export default Article