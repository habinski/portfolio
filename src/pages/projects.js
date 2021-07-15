import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import Project from '../components/projects/project'
import Seo from '../components/SEO'

export const query = graphql`
{
	projects: allStrapiProject(sort: {fields: id, order: DESC}) {
	  nodes {
		id
		name
		description
		published_at
	  }
	}
  }
  
`

const projectsPage = ({ data }) => {
	const projects = data.projects.nodes.map(item => {
		return (<Project key={item.id} item={item}></Project>)
	})
	return (
		<Layout title='projects'>
			<Seo title='Portfolio' />
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