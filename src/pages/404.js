import React from 'react'
import Layout from '../components/Layout'
import { Link } from "gatsby"

import { errPage, errContent } from '../css/404.module.scss'


const Err = () => {
	return (
		<Layout title='404'>
			<div className={errPage}>
				<div className={errContent}>
					<h1>404</h1>
					<h2>
						Page not found
					</h2>

					<Link className="btnMore" to="/">Home page</Link>
				</div>
			</div>

		</Layout>
	)
}
export default Err