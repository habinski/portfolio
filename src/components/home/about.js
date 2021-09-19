import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Markdown from "markdown-to-jsx"
import { about, aboutText, content } from '../../css/home/aboutSection.module.scss'

const query = graphql`
{
    strapiAbout {
      text
    }
  }`


const About = () => {
  const data = useStaticQuery(query);


  return (<section className={about} >
    <h2 className="title">aboUt</h2>
    <div className={content}>
      <div className={aboutText}>
        <Markdown children={data.strapiAbout.text} />
      </div>
    </div>
  </section>
  )
}


export default About