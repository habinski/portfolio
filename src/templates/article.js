import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Markdown from 'markdown-to-jsx';
import Layout from "../components/Layout"
import PreBlock from "../components/blog/CodeBlock";
import ArticleCard from '../components/home/articleCard'
import Seo from "../components/SEO"

import {
	post,
	head,
	categoriesDiv,
	headerInfo,
	readNext,
	more
} from '../css/blog/article.module.scss'



const Article = ({ pageContext }, location) => {
	const { title, updated_at, cover, content, published_at, categories } = pageContext.article.node
	const previous = pageContext.article.previous
	const next = pageContext.article.next
	console.log(next)

	const coverImage = getImage(cover.localFile)

	return (
		<Layout title='blog'>
			<Seo
				title={title}
				pathname={location.pathname}
				image={coverImage}
			/>
			<section className={post}>
				<div className={head} >
					<div className={headerInfo}>
						<div className={categoriesDiv}>{
							categories.map((category => {
								return <Link to={`/blog/${category.url}`}>{category.name}</Link>

							}))
						}</div>
						<h1>{title}</h1>
						<p>Published: {published_at}</p>
						{
							published_at !== updated_at ? <p>Last update: {updated_at}</p> : ''
						}
						<p>{Math.round(content.length / 500) + ' minutes read'}</p>

					</div>
					<GatsbyImage image={coverImage} alt="cover" />

				</div>
				<Markdown options={{
					wrapper: 'article',
					overrides: {
						pre: PreBlock,
					},
				}} children={content} />
				<div className={readNext}>
					<h5>Read next</h5>
					<div className={more}>
						{/* <ArticleCard article={previous} /> */}
						{previous !== null ? <ArticleCard article={previous} /> : ''}
						{next !== null ? <ArticleCard article={next} /> : ''}

					</div>
				</div>
			</section>

		</Layout >
	)
}

export default Article