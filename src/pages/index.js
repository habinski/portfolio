import React from "react"
import Layout from "../components/Layout"
import HeroSection from '../components/home/hero'
import Projects from '../components/home/projects'
import Stack from '../components/home/stack'
import Experience from '../components/home/experience'
import About from '../components/home/about'
import ArticlesBlock from '../components/home/articles'
import SocialLinks from '../components/home/sociallinks'
import Contact from '../components/home/Contact'

import Seo from '../components/SEO'


export default function Home() {
  return <Layout title={"Habiński"}>
    <Seo title='Homepage' />
    <div className='main-grid'>
      <HeroSection />
      <About />
      <Projects />
      <Stack />
      <Experience />
      <ArticlesBlock />
      <Contact />
      <SocialLinks />
    </div>
  </Layout>
}
