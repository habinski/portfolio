import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Moment from "react-moment"

export const query = graphql`
  {
	allStrapiExperience(sort: {fields: to, order: DESC}) {
		nodes {
		  company
		  description
		  from
		  to
		  strapiId
		  position
	  }
	}
  }`

const Experience = () => {
	const data = useStaticQuery(query);

	const experiences = data.allStrapiExperience.nodes.map(work => {
		return (
			<div className="work" key={work.strapiId}>
				<p className='period'>
					<Moment format='MMM YYYY'>{work.from}</Moment> — {work.to !== null ? <Moment format='MMM YYYY'>{work.to}</Moment> : 'now'}
				</p>
				<Moment className='fromTo' duration={work.from}
					date={work.to}
				/>
				<h4>{work.company}</h4>
				<h5>{work.position}</h5>
				<p>{work.description}</p>
			</div>

		)
	})
	return (
		<section className='experience'>
			<h2 className='title'>Experience</h2>
			{experiences}
		</section>
	)
}
export default Experience