import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="about-main">
        <article className="hero">
          <img src="images/happy.jpg" className="background-image" alt="Student with CPX Board" />
          <div className="pane">
            <header className="content">
              <h2>
                <span>Morgan Stanley Makerspace</span>
              </h2>
            </header>
          </div>
        </article>
        <SEO title="About" />
        <article className="content">
          <h2>What is Morgan Stanley Makerspace</h2>
          <p>An employee designed and run program bringing STEM-based interactive workshops to children and teens who wouldn't otherwise have the opportunity to learn about coding and robotics.</p>
          <p>Our most common workshop marries Python programming and hardware with the Adafruit Circuit Playground Express (CPX), a beginner friendly microcontroller that provides fast feedback necessary for new programmers.</p>
          <p>Since the program's launch in 2018, 400+ children and teens have participated in 30 different workshops; 50% of participants resided in a NYC shelter at the time of participation.</p>
          <h3>Mission</h3>
          <blockquote>
            <p>Our DNA, our culture and our history are rooted in serving our clients.</p>
            <cite>James Gorman</cite>
          </blockquote>
          <p>The Morgan Stanley Makerspace works towards two of the Firm's core values.</p>
          <h3>Give Back</h3>
          <ul>
            <li>Be generous with your expertise, your time, your money.</li>
            <li>Invest in the future of our communities and our Firm.</li>
            <li>Mentor our next generation.</li>
          </ul>

        </article>
      </div >
    </Layout >
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
