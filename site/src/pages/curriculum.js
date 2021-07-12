import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const CurriculumPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <div className="trainer-main">
                <article className="hero">
                    <img src="images/chelci-beth.jpg" className="background-image" alt="Student with CPX Board" />
                    <div className="pane">
                        <header className="content">
                            <h2>
                                <span>Curriculum</span>
                            </h2>
                        </header>
                    </div>
                </article>
                <SEO title="About" />
                <article className="content">
                    <h3>Introduction to CircuitPython</h3>
                    <p>This is the original single day workshop with Circuit Playground Express and CircuitPython. Includes an overview of the board's sensors and lights through code. Allows students to dig into an aspect of the device they enjoy for an afternoon of exploration. </p>
                    <p>Best for ages</p>
                    <p><Link to={`/exercises`}>Go to exercises</Link></p>
                    <h3>MakeCode with the Circuit Playground Express</h3>
                    <p>Multi-week course with Circuit Playground Express and MakeCode. Best for ages </p>
                </article>
            </div >
        </Layout >
    )
}

export default CurriculumPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
