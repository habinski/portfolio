import React from 'react'

import Img from "gatsby-image"



const Project = ({ item }) => {

	return (
		<div className="project-item">
			<a href={item.link} className="screenshot">
				<Img fluid={item.screenshot.childImageSharp.fluid} />
			</a>
			<h3>{item.name}</h3>
			<div className="description">
				<p>{item.description}</p>
				<div className="technology">
					{
						item.technology.map(t => {
							return (
								<span key={t.id} className='technology-item'>{t.name}</span>
							)
						})
					}</div>
			</div>
			<a href={item.link} className='btn-more' >site</a>
		</div>
	)

}
export default Project