import React from "react"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/SEO"

const query = graphql`
{
    strapiPrivacy {
      gdpr
    }
  }`

export default function Privacy() {
	const data = useStaticQuery(query);
	const gdpr = data.strapiPrivacy.gdpr
	return <Layout title='privacy'>
		<Seo title='Privacy' />
		<section className='privacy'>
			<div className='privacy-content'>
				<ReactMarkdown source={gdpr} />
			</div>
		</section>
	</Layout >
}
