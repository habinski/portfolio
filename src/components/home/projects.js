import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Markdown from "markdown-to-jsx"
import {
  projectsSection,
  projectsItems,
  projectLink,
  desriptionBlock, showDescriptionBlock, desriptionText
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
  const [description, setDescription] = useState('**Hover** over a name to find a short **description**!\n\n Or **click** to **open** this project if they are already available.')
  function showDescription(desc) {
    setDescription(desc)
  }

  const data = useStaticQuery(query)
  // target='_blank'
  const projects = data.allStrapiProject.nodes.map((project) => {
    if (project.link) return <a href={project.link} className={projectLink} onMouseEnter={() => showDescription(project.description)} data-text={project.name} key={project.id} >{project.name} </a>

    else return <p className={projectLink} onMouseEnter={() => showDescription(project.description)} data-text={project.name} key={project.id} >{project.name} </p>

  })

  return (
    <section id='projects'>
      <h2 className='title'>Projects</h2>
      <div className={`${projectsSection} ${description ? showDescriptionBlock : ''}`}>

        <div className={projectsItems} >
          {projects}
        </div>
        <div className={desriptionBlock}>
          <div className={desriptionText}>
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects