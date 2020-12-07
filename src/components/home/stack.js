import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
export const query = graphql`
{
	allStrapiStack {
	  nodes {
		id
		type
		technology {
		  name
		  id
		  icon {
			childImageSharp {
				fixed(height: 30){
				...GatsbyImageSharpFixed
			  }
			}
		  }
		}
	  }
	}
  }  
`
const Stack = () => {
	const data = useStaticQuery(query)
	const stacks = data.allStrapiStack.nodes.map((stack) => {

		return (
			<div className='bg' key={stack.id}>
				<div className='items-block'>
					<h4>{stack.type}</h4>
					<div className="items">
						{stack.technology.map((technologyItem) => {
							return (
								<div className='item' key={technologyItem.id}>
									<Img alt={technologyItem.name} fixed={technologyItem.icon.childImageSharp.fixed} ></Img>
									<p>{technologyItem.name}</p>
								</div>
							)
						})}

					</div>
				</div>
			</div>)
	})

	return (
		<section className='stack'>
			<h2 className='title'>stack</h2>
			<div className="stack-items">
				{stacks}
			</div>
		</section>
	)
}
export default Stack