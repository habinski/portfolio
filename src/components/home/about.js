import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ReactMarkdown from "react-markdown"


const query = graphql`
{
    strapiAbout {
      about
    }
  }`


const About = () => {
  const data = useStaticQuery(query);
  const about = data.strapiAbout.about

  return (<section className='about  parent-title' >
    <h2 className="title" > about </h2> <div className="text" >
      <ReactMarkdown source={about} /> </div> </section>
  )
}




export default About