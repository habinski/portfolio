import React from "react"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/SEO"

import {
	privacy,
	privacyContent
} from '../css/privacy.module.scss'
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
		<section className={privacy}>
			<h2 className='title'>Privacy policy</h2>
			<div className={privacyContent}>
				<ReactMarkdown children={gdpr} />
			</div>
		</section>
	</Layout >
}
