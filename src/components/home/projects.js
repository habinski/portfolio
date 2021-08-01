import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import {
	projectsSection,
	projectsItems,
	projectLink,
	desriptionBlock, showDescriptionBlock
} from '../../css/home/projectsSection.module.scss'
const query = graphql`
{
	allStrapiProject(sort: {fields: id, order: DESC}) {
	  nodes {
		id
		name
		description
		link
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
	// target='_blank'
	const projects = data.allStrapiProject.nodes.map((project) => {
		if (project.link) return <a href={project.link} className={projectLink} onMouseEnter={() => showDescription(project.description)} data-text={project.name} key={project.id} >{project.name} </a>

		else return <a className={projectLink} onMouseEnter={() => showDescription(project.description)} data-text={project.name} key={project.id} >{project.name} </a>

	})

	return (
		<section id='projects'>
			<h2 className='title'>Projects</h2>
			<div className={`${projectsSection} ${description ? showDescriptionBlock : ''}`}>
				<div className={desriptionBlock}>
					<ReactMarkdown>{description}</ReactMarkdown>
				</div>
				<div className={projectsItems} >
					{projects}

				</div>
				{/* <Link to='/projects' className={btnMore} >more</Link> */}
			</div>
		</section>
	)
}
export default Projects