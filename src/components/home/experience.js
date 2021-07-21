import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import {
	workSection,
	period,
	experience,
	expirienceItems

} from '../../css/home/experienceSection.module.scss'
export const query = graphql`
{
	allStrapiExperience(sort: {fields: to, order: DESC}) {
	  nodes {
		company
		description
		from(formatString: "MMM YYYY")
		to(formatString: "MMM YYYY")
		strapiId
		position
	  }
	}
  }
  `

const Experience = () => {
	const data = useStaticQuery(query);

	const experiences = data.allStrapiExperience.nodes.map(work => {
		return (
			<div className={workSection} key={work.strapiId}>
				<p className={period}>
					{work.from} — {work.to !== null ? work.to : 'now'}
				</p>

				<h4>{work.company}</h4>
				<h5>{work.position}</h5>
				<p>{work.description}</p>
			</div>

		)
	})
	return (
		<section className={experience}>
			<h2 className='title'>Experience</h2>
			<div className={expirienceItems}>

				{experiences}
			</div>
		</section>
	)
}
export default Experience