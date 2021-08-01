import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'


const Project = ({ item }) => {

	return (
		<div className="project-item" id={item.name}>
			<a href={item.link} className="screenshot">
				<GatsbyImage src={item.screenshot.url} alt='project' />
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
			{/* <a href={item.link} className='btnMore' >site</a> */}
		</div>
	)

}
export default Project