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
                    <br />
                    <h3>Testimonials</h3>
                    <blockquote>
                        <p>Growing up, I was lucky to learn how to have fun with technology, and not just by consuming.
                            Not everyone gets the opportunity to 'unveil the magic' behind technology when they're young,
                            but for many the curiosity exists. MS Makerspaces allow technologists to share this discovery
                            with children who might otherwise not have the opportunity. As a volunteer I get to see the
                            sparkle in kids' eyes as they begin their journey as future technologists. My goal is to
                            contribute to MS Makerspaces growth to reach more communities and children. The gift of education
                            really makes a difference and the feeling is extremely rewarding.
                        </p>
                        <cite>Augusto Ramirez</cite>
                    </blockquote>
                    <blockquote>
                        <p>
                            The MS Makerspace program came into my life at exactly the right time. After many years of helping
                            my own children learn robotics through extracurricular programs like the First Lego League, I wanted
                            to take what I had learned and share it with children who might not have otherwise have access. Our
                            MS Makerspace workshops have created the perfect opportunity. Teaching kids who stand to benefit the
                            most from the right mentorship has been such a fulfilling experience. If we continue to leverage the
                            collective knowledge of our Technology organization, I believe we can continue to make a big difference
                            in kids' lives by inspiring and igniting a passion for technology.
                        </p>
                        <cite>Dinesh Doshi</cite>
                    </blockquote>
                    <blockquote>
                        <p>
                            MS Makerspaces embody what it means to Give Back through skills-based volunteerism. Organically grown
                            within Technology, it's a movement that brings coding to children and young adults who might not get
                            regular exposure to Computer Science education. Whether we're running a workshop at a school in
                            Jersey City or a shelter in the Bronx, there is something magical about watching a young person realize
                            that coding is cool, or that they have a gift for thinking like a programmer.
                        </p>
                        <cite>Kait Szydlowski</cite>
                    </blockquote>
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
