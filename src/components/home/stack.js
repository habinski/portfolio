import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
	bg,
	itemsDiv,
	items,
	item,
	stack,
	stackItems
} from '../../css/home/stackSection.module.scss'


export const query = graphql`
{
	allStrapiStack {
	  nodes {
		id
		type
		technology {
		  name
		  id
		}
	  }
	}
  }  
`
const Stack = () => {
	const data = useStaticQuery(query)
	const stacks = data.allStrapiStack.nodes.map((stack) => {

		return (
			<div className={bg} key={stack.id}>
				<div className={itemsDiv}>
					<h4>{stack.type}</h4>
					<div className={items}>
						{stack.technology.map((technologyItem) => {
							return (
								<div className={item} key={technologyItem.id}>
									<StaticImage alt={technologyItem.name} src={technologyItem.icon.url} ></StaticImage>
									<p>{technologyItem.name}</p>
								</div>
							)
						})}

					</div>
				</div>
			</div>)
	})

	return (
		<section className={stack}>
			<h2 className='title'>stack</h2>
			<div className={stackItems}>
				{stacks}
			</div>
		</section>
	)
}
export default Stack