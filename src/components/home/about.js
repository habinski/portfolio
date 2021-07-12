import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ReactMarkdown from "react-markdown"
import { about, aboutText } from '../../css/home/aboutSection.module.scss'

const query = graphql`
{
    strapiAbout {
      text
    }
  }`


const About = () => {
  const data = useStaticQuery(query);


  return (<section className={about} >
    <h2 className="title"> about </h2>
    <div className={aboutText}>
      <ReactMarkdown children={data.strapiAbout.text} />
    </div>
  </section>
  )
}


export default About