import React from "react"
import { graphql, useStaticQuery } from "gatsby"


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
		return <a href={link.link} target='_blank' key={link.id} rel="noreferrer" >{link.name}</a>
	})
	return (
		<section className='socialLinks'>
			<h2 className='title'>follow</h2>
			<div className="links">
				{links}
			</div>
		</section>
	)
}

export default SocialLinks