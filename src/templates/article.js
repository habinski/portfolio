import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
// import Moment from "react-moment"
// import Prism from 'prismjs';
import Layout from "../components/Layout"
// import ArticleCard from "../components/home/articleCard"
import Seo from "../components/SEO"

// export const query = graphql`
// query ArticleQuery($id: Int!) {
//     strapiArticle(strapiId: { eq: $id }) {
//       strapiId
//       title
//       content
// 	  published_at
// 	  updated_at
// 	  categories {
// 		  name
// 	  }
//       cover { 
// 		localFile {
// 			childImageSharp {
// 			  gatsbyImageData
// 			}
// 		  }
//       }
// 	}
// 	more: strapiCategory(articles: {elemMatch: {id: {eq: $id}}}) {
// 		name
// 		articles {
// 		  id
// 		  title
// 		}
// 	  }
//   }
//  `



const Article = ({ pageContext }, location) => {
	console.log(pageContext.article.node)
	const { title, updated_at, cover, content, categories, published_at } = pageContext.article.node
	const previous = pageContext.article.previous
	const next = pageContext.article.next
	const coverImage = getImage(cover.localFile)


	return (
		<Layout title='blog'>
			<Seo
				title={title}
				pathname={location.pathname}
			/>
			<div className='post'>
				<div className='head' >
					<div className="header-info">
						<h1>{title}</h1>
					</div>
					<GatsbyImage image={coverImage} alt="cover" />

				</div>
				<div className="article-info">
					<p>Published at {published_at}</p>
					{
						published_at === updated_at ? <p>Last update: {updated_at}</p> : ''
					}
					<p>{Math.round(content.length / 600) + ' minutes read'}</p>

				</div>
				<article>
					<ReactMarkdown children={content} />
				</article>
				<div className="read-next">
					<h1>Read next</h1>
					<div className="more">
						{/* {more} */}
					</div>
				</div>
			</div>

		</Layout >
	)
}

export default Article