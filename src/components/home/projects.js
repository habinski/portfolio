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
		return <h3 key={project.id}>{project.name}</h3>
	})

	return (
		<section className='projects parent-title' id='projects'>
			<h2 className='title'>Projects</h2>

			<div className="projects-items">
				{projects}
				<Link to='/projects' className='btn-more' data-text='more'>more</Link>
			</div>
		</section>
	)
}
export default Projects