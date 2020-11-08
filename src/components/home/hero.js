import React from 'react'

import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    strapiHero {
        introduce
        description
    }
  }
`

const HeroSection = () => {
	const data = useStaticQuery(query)
	const { introduce, description } = data.strapiHero
	return (
		<section className='hero'>
			<div className='hero-content'>
				<h1>{introduce}</h1>
				<p>{description}</p>
			</div>
		</section>
	)
}
export default HeroSection