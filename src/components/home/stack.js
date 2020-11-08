import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

// export const query = graphql`
// query{
// 	allStrapiStack {
// 	  edges {
// 		node {
// 		  id
// 		  type
// 		  technology {
// 			id
// 			name
// 			icon {
// 			  publicURL
// 			}
// 		  }
// 		}
// 	  }
// 	}
//   }

// `
// const Stack = () => {
// 	const data = useStaticQuery(query)
// 	console.log(data)
// 	const stacks = data.allStrapiStack.edges.map((stack) => {
// 		console.log(stack)
// 		return (
// 			<div className='bg' key={stack.node.id}>
// 				<div className='glass'>
// 					<h4>{stack.node.type}</h4>
// 					<div className='items'>
// 						{stack.node.technology.map((technologyItem) => {
// 							// alert(technologyItem.icon.publicURL)
// 							return (
// 								<div className='item' key={technologyItem.id}>
// 									<img src={technologyItem.icon.publicURL} />
// 									<p>{technologyItem.name}</p>


// 								</div>
// 							)
// 						})}

// 					</div>
// 				</div>
// 			</div>)
// 	})

// 	return (
// 		<section className='stack'>
// 			<h2 className='title'>stack</h2>
// 			<div className="stack-items">
// 				{stacks}
// 			</div>
// 		</section>
// 	)
// }

const Stack = () => {
	return (
		<h1>oopss</h1>
	)
}
export default Stack