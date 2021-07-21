import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"


import Layout from "../components/Layout"
import CodeBlock from "../components/blog/CodeBlock";
import ArticleCard from '../components/home/articleCard'
import Seo from "../components/SEO"

import {
	post,
	head,
	headerInfo,
	articleInfo,
	readNext,
	more
} from '../css/blog/article.module.scss'



const Article = ({ pageContext }, location) => {
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
			<section className={post}>
				<div className={head} >
					<div className={headerInfo}>
						<h1>{title}</h1>
						<p>Published at {published_at}</p>
						{
							published_at === updated_at ? <p>Last update: {updated_at}</p> : ''
						}
						<p>{Math.round(content.length / 600) + ' minutes read'}</p>

					</div>
					<GatsbyImage image={coverImage} alt="cover" />

				</div>

				<article>
					<ReactMarkdown children={content} components={CodeBlock} />
				</article>
				<div className={readNext}>
					<h1>Read next</h1>
					<div className={more}>
						{/* <ArticleCard article={previous} /> */}
						{console.log(previous)}
						{console.log(`///`)}
						{console.log(next)}

						{previous !== null ? <ArticleCard article={previous} /> : ''}
						{next !== null ? <ArticleCard article={next} /> : ''}

					</div>
				</div>
			</section>

		</Layout >
	)
}

export default Article