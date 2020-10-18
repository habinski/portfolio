import React from "react"
import Layout from "../components/Layout"
import HeroSection from '../components/home/hero'
// import graffiti from '../assets/graffiti.svg'
import Projects from '../components/home/projects'
import Stack from '../components/home/stack'
import Experience from '../components/home/Experience'
import About from '../components/home/About'
import ArticlesBlock from '../components/home/articles'
import SocialLinks from '../components/home/socialLinks'


export default function Home() {
  return <Layout title={"Habinski"}>
    <HeroSection />
    {/* <img src={graffiti} alt="graffiti" className='graffiti' /> */}
    <Projects />
    <Stack />
    <Experience />
    <About />
    <ArticlesBlock />
    <SocialLinks />

  </Layout>
}
