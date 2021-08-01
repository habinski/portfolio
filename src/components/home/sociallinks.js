import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
	linksContent,
	linksBlock
} from '../../css/home/socialLinksSection.module.scss'


export const query = graphql`
{
	allStrapiSocialLink {
		nodes {
			id
			link
			name
			
		}
    }
}
`
const SocialLinks = () => {
	const data = useStaticQuery(query)
	const links = data.allStrapiSocialLink.nodes.map(link => {
		return <a href={link.link} data-text={link.name} target='_blank' key={link.id} rel="noreferrer" >{link.name}</a>
	})
	return (
		<section className={linksBlock}>
			<h2 className='title'>follow</h2>
			<div className={linksContent}>
				{links}
			</div>
		</section>
	)
}

export default SocialLinks