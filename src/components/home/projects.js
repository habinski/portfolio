import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import {
	projectsSection,
	projectsItems,
	btnMore,
	projectLink
} from '../../css/home/projectsSection.module.scss'
const query = graphql`
{
	allStrapiProject(sort: {fields: id, order: DESC}) {
	  nodes {
		id
		name
	  }
	}
  }  
`

const Projects = () => {
	const data = useStaticQuery(query)

	const projects = data.allStrapiProject.nodes.map((project) => {
		return <Link className={projectLink} to={`projects#${project.name}`} data-text={project.name} key={project.id}>{project.name}</Link>
	})

	return (
		<section className={projectsSection} id='projects'>
			<h2 className='title'>Projects</h2>

			<div className={projectsItems}>
				{projects}
			</div>
			<Link to='/projects' className={btnMore} >more</Link>
		</section>
	)
}
export default Projects