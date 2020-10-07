import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
{
    allStrapiArticle(limit: 3, sort: {fields: updated_at, order: DESC}) {
      nodes {
        category {
          name
          id
        }
        title
        updated_at
        content
        id
        image {
          publicURL
        }
      }
    }
  }
`
const ArticlesBlock = () => {
	const data = useStaticQuery(query)
	const articles = data.allStrapiArticle.nodes.map(article => {
		console.log(article)
		return (
			<div className="article">
				<img src={article.image.publicURL} alt="" />

				<div className="text">
					<h3>{article.title}</h3>
					<p>	<ReactMarkdown source={article.content.slice(0, 250) + '...'} /></p>
				</div>
				{/* <div className='categories'>
					{article.category.map((c) => {
						return (
							<p key={c.id}>{c.name}</p>
						)
					})}
				</div> */}
			</div>
		)

	})
	return (
		<section className='articles parent-title'>
			<h2 className='title'>blog</h2>
			{articles}
		</section>
	)
}
export default ArticlesBlock

