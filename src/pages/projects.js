import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import Project from '../components/projects/project'

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
const projectsPage = ({ data }) => {
	// const data = useStaticQuery(query);
	console.log(data)
	const projects = data.projects.nodes.map(item => {
		return (<Project item={item}></Project>)
	})
	return (
		<Layout title='projects'>
			<section className="porjects-page">
				<h1>Projects</h1>
				<div className='projects-grid'>
					{projects}
				</div>
			</section>

		</Layout>
	)
}

export default projectsPage