import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'

const CurriculumPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <div className="curriculum-main">
                <article className="hero">
                    <img src="images/circuitplaygroundexpress.jpg" className="background-image" alt="CPX Board" />
                    <div className="pane">
                        <header className="content">
                            <h2>
                                <span>Circuit Playground Express with CircuitPython</span>
                            </h2>
                        </header>
                    </div>
                </article>
                <SEO title="About" />
                <article className="content">
                    <img src="/images/circuitpython/mu.png" alt="Mu Blink" className="makecode" />
                    <h2>Introduction to CircuitPython - Level 1</h2>
                    <p>This is the original single day workshop with Circuit Playground Express and CircuitPython. Includes an overview of the board's sensors and lights through code. Allows students to dig into an aspect of the device they enjoy for an afternoon of exploration. </p>
                    <p><Link to={`/exercises/circuitpython/level-1/`}>Go to exercises</Link></p>

                    <h2>Programming with CircuitPython - Level 2</h2>
                    <p>This course builds on the original single day workshop with Circuit Playground Express and CircuitPython to fill out the student's understanding of basic programming concepts.</p>
                    <p><Link to={`/exercises/circuitpython/level-2/`}>Go to exercises</Link></p>
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
