import React from 'react'

import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    strapiHero {
        first_specialty
        second_specialty
        description
    }
  }
`

const HeroSection = () => {
	const data = useStaticQuery(query)
	const { first_specialty, second_specialty, description } = data.strapiHero
	return (
		<section className='hero'>
			<div className='hero-content'>
				<div className="introduce">
					<h1>{first_specialty}</h1>
					<h1>{second_specialty}</h1>
				</div>
				<p>{description}</p>
			</div>
		</section>
	)
}
export default HeroSection
