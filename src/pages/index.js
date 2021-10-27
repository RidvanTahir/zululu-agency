import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Inghelbrecht Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="randomized unsplash image!"
        src="https://source.unsplash.com/random/800x600"
      />
      </Layout>
    </main>
  )
}

export default IndexPage