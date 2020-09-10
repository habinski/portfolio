import React from "react"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
    strapiPrivacy {
      gdpr
    }
  }`


// const About = () => {
//  

//   return (<section className='about  parent-title' >
//     <h2 className="title" > about </h2> <div className="text" >

//   )
// }





export default function Privacy() {
	const data = useStaticQuery(query);
	const gdpr = data.strapiPrivacy.gdpr
	return <Layout >
		<section className='privacy'>
			<ReactMarkdown source={gdpr} />
		</section>
	</Layout >
}