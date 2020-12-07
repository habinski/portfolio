import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
// import Prism from 'prismjs';
import Layout from "../components/Layout"
import ArticleCard from "../components/home/articleCard"
import SEO from "../components/SEO"
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
	  updated_at
	  categories {
		  category
	  }
      cover {
		childImageSharp {
            fluid(maxWidth: 1920) {
				src
              ...GatsbyImageSharpFluid
            }
          }
      }
	}
	more: strapiCategory(articles: {elemMatch: {id: {eq: $id}}}) {
		category
		articles {
		  id
		  title
		}
	  }
  }
 `



const Article = ({ data }, location) => {
	const article = data.strapiArticle

	const more = data.more.articles.map((moreArticle, i) => {
		if (moreArticle.id !== article.strapiId && i <= 1) {
			return (
				// <Link to={`/blog/${moreArticle.title.replace(/\s/g, '-')}`}
				// 	className="article"
				// 	key={moreArticle.id}>
				// 	<div className='cover'>
				// 		<Img style={coverImg} fluid={moreArticle.cover.childImageSharp.fluid} />
				// 		<h3>{moreArticle.title}</h3>
				// 	</div>
				// </Link>
				<Link to={`/blog/${moreArticle.title.replace(/\s/g, '-')}`}>{moreArticle.title}</Link>
			)
		}
	})

	const coverImg = {
		width: '100vw',
		height: '50vh'
	}
	return (
		<Layout title='blog'>
			<SEO
				title={article.title}
				image={article.cover.childImageSharp.fluid.src}
				pathname={location.pathname}
			/>
			<div className='post'>
				<div className='head' >
					<div className="header-info">
						<h1>{article.title}</h1>
					</div>
					<Img style={coverImg} fluid={article.cover.childImageSharp.fluid} alt="cover" />
				</div>
				<div className="article-info">
					<p>Published: <Moment format="D MMM YYYY">{article.published_at}</Moment> (<Moment fromNow >{article.published_at}</Moment>)</p>
					{
						article.published_at === article.updated_at ? <p>Last update: <Moment format="D MMM YYYY">{article.updated_at}</Moment> (<Moment fromNow >{article.updated_at}</Moment>)</p> : ''
					}
					<p>{Math.round(article.content.length / 600) + ' minutes read'}</p>

				</div>
				<article>
					<ReactMarkdown source={article.content} />
				</article>
				<div className="read-next">
					<h1>Read next</h1>
					<div className="more">
						{more}
					</div>
				</div>
			</div>

		</Layout >
	)
}

export default Article