import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allStrapiStack {
      nodes {
		id
		type
        technology {
          id
		  name
		  icon {
			absolutePath
		  }
        }
      }
    }
  }
`

const Stack = () => {
	const data = useStaticQuery(query)
	const stacks = data.allStrapiStack.nodes.map((stack) => {

		return (<div className='parent' key={stack.id}>
			<div className='bg'>
				<div className='glass'>
					<h4>{stack.type}</h4>
					<div className='items'>
						{stack.technology.map((technologyItem) => {

							return (

								<div className='item' key={technologyItem.id}>
									<img src={''} alt="" />
									<p>{technologyItem.name}</p>
								</div>
							)
						})}

					</div>
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