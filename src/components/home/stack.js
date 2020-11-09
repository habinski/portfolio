import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
{allStrapiStack {
    nodes {
      type
      technology {
        name
        id
        icon {
          childImageSharp {
            fixed {
              src
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
	console.log(data)
	const stacks = data.allStrapiStack.nodes.map((stack) => {
		// console.log(stack)
		return (
			<div className='bg' key={stack.id}>
				<div className='glass'>
					<h4>{stack.type}</h4>
					<div className='items'>
						{stack.technology.map((technologyItem) => {
							// console.log(technologyItem.icon.childImageSharp.fixed.src)
							return (
								<div className='item' key={technologyItem.id}>
									{/* <img src={technologyItem.icon.childImageSharp.fixed.src} /> */}
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