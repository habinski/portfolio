import React from 'react'
import Layout from '../components/Layout'
import { Link } from "gatsby"

const Err = () => {
	return (
		<Layout>
			<div className="err-page">
				<div className="err-content">
					<h1>404</h1>
					<h2>
						Page not found
					</h2>
					<Link to='/'>Go home</Link>
				</div>
			</div>

		</Layout>
	)
}
export default Err