import React from "react"
import Layout from "../components/Layout"
import Markdown from 'markdown-to-jsx'

// import Markdown from ''
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/SEO"

import {
  privacy,
  privacyContent
} from '../css/privacy.module.scss'
const query = graphql`
{
    strapiPrivacy {
      gdpr
    }
  }`

export default function Privacy() {
  const data = useStaticQuery(query);
  const gdpr = data.strapiPrivacy.gdpr
  return <Layout title='privacy'>
    <Seo title='Privacy' />
    <section className={privacy}>
      <h1 className='title'>Privacy policy</h1>
      <div className={privacyContent}>
        <Markdown children={gdpr} />
      </div>
    </section>
  </Layout >
}
