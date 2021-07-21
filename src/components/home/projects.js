import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import {
	projectsSection,
	projectsItems,
	projectLink,
	desriptionBlock
} from '../../css/home/projectsSection.module.scss'
const query = graphql`
{
	allStrapiProject(sort: {fields: id, order: DESC}) {
	  nodes {
		id
		name
		description
	  }
	}
  }  
`

const Projects = () => {
	const [description, setDescription] = useState(null)
	function showDescription(desc) {
		setDescription(desc)
	}

	const data = useStaticQuery(query)

	const projects = data.allStrapiProject.nodes.map((project) => {
		return <p className={projectLink} onMouseEnter={() => showDescription(project.description)} data-text={project.name} key={project.id}>{project.name}</p> //must be button
	})

	return (
		<section id='projects'>
			<h2 className='title'>Projects</h2>
			<div className={projectsSection}>
				<div className={desriptionBlock}>
					<ReactMarkdown>{description}</ReactMarkdown>
				</div>
				<div className={projectsItems} >
					{projects}
				</div>
				{/* <Link to='/projects' className={btnMore} >more</Link> */}
			</div></section>
	)
}
export default Projects