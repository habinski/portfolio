import React from 'react'

import { graphql, useStaticQuery } from "gatsby"

import {
	hero,
	heroContent,
	introduce,
	first,
	second
} from '../../css/home/heroSection.module.scss'


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
		<section className={hero}>
			<div className={heroContent}>
				<div className={introduce}>
					<h1 className={first}>{first_specialty}</h1>
					<h1 className={second}>{second_specialty}</h1>
				</div>
				<p>{description}</p>
			</div>
		</section>
	)
}
export default HeroSection
