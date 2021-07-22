import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { contact, grid } from '../../css/home/contactSection.module.scss'

const query = graphql`
{
	strapiContact {
	  email
	  text
	}
  }  
`


const Contact = () => {
	const data = useStaticQuery(query)
	const { text, email } = data.strapiContact
	return (
		<section id='contact' className={contact}>
			<h2 className='title'>Contact me</h2>
			<div className={grid}>
				<p>{text}</p>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
		</section>
	)
}
export default Contact