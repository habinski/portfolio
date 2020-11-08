import React from "react"
import Layout from "../components/Layout"
import HeroSection from '../components/home/hero'
import Projects from '../components/home/projects'
import Stack from '../components/home/stack'
import Experience from '../components/home/experience'
import About from '../components/home/about'
import ArticlesBlock from '../components/home/articles'
import SocialLinks from '../components/home/sociallinks'


export default function Home() {
  return <Layout title={"Habinski"}>
    <HeroSection />
    <Projects />
    <Stack />
    <Experience />
    <About />
    <ArticlesBlock />
    <SocialLinks />

  </Layout>
}
