import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ReactMarkdown from "react-markdown"


const query = graphql`
{
    strapiAbout {
      text
    }
  }`


const About = () => {
  const data = useStaticQuery(query);
  const text = data.strapiAbout.text

  return (<section className='about parent-title' >
    <h2 className="title"> about </h2>
    <div className="text">
      <ReactMarkdown source={text} />
    </div>
  </section>
  )
}


export default About