import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


export const query = graphql`
query {
	projects: allStrapiProject {
	  nodes {
		id
		name
		link
		description
		published_at
		screenshot {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				  }
			  }
		}
		technology {
		  name
		  id
		  icon {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				  }
			  }
		  }
		}
	  }
	}
  }
`
const Project = () => {
	const data = useStaticQuery(query);

	const projectsGrid = data.projects.nodes.map(item => {
		console.log(item)
		return (
			<div className="project-item">
				<a href={item.link} className="screenshot">
					<Img fluid={item.screenshot.childImageSharp.fluid} />
				</a>
				<div className="description">
					<h3>{item.name}</h3>
					<p>{item.description}</p>
					<div className="technology">
						{
							item.technology.map(t => {
								return (
									<span className='technology-item'>{t.name}</span>
								)
							})
						}</div>
				</div>
				<a href={item.link} className='btn-more' >site</a>
			</div>
		)
	})
	return (
		<section className="porjects-page">
			<h1>Projects</h1>
			<div className='projects-grid'>
				{projectsGrid}
			</div>
		</section>
	)
}
export default Project