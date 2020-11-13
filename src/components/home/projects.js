import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiProject {
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
		return <Link className='project-link' to={`projects#${project.name}`} data-text={project.name} key={project.id}>{project.name}</Link>
	})

	return (
		<section className='projects' id='projects'>
			<h2 className='title'>Projects</h2>

			<div className="projects-items">
				{projects}
				<Link to='/projects' className='btn-more' >more</Link>
			</div>
		</section>
	)
}
export default Projects