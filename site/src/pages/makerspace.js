import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const MakerspacePage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <div className="makerspace-main">
                <article className="hero">
                    <img src="images/learning.jpg" className="background-image" alt="Student with CPX Board" />
                    <div className="pane">
                        <header className="content">
                            <h2>
                                <span>Maker Magic</span>
                            </h2>
                        </header>
                        <section className="content">
                            <span>
                                Design Your Own Blueprint for Community Tech Empowerment
                            </span>
                        </section>
                    </div>
                </article>
                <SEO title="Make a Makerspace" />
                <article className="content">
                    <h2>Motivation</h2>
                    <blockquote>
                        <b>Minority students in under-resourced  or underperforming  school districts are at risk of being left behind</b>, a scenario that
                        has far-reaching socioeconomic consequences for the United States.
                    </blockquote>
                    <p>In order to fill the tech- and science-focused roles of the future, technologists nationwide should focus on providing youth from underserved communities the resources to promote computer science advocacy now.</p>
                    <p>Students from underprivileged backgrounds are 8 to 10 times more likely to pursue college degrees in computer science if they have taken AP computer science in high school. We can project that these odds will only increase if studentds are given even earlier exposure to software and hardware technologies.</p>
                    <p>Through this Maker workshop, technologists who are passionate about bridging this gap will develop a blueprint that can be leveraged to facilitate tech exploration workshops for underserved youth in their communities. Marrying knowledge of Python programming and Adafruit Circuit Playground Express devices, their students will be empowered to become makers of technology.</p>
                </article>
                <article className="content">
                    <div className="talking-points">
                        <header className="content">
                            <h3>
                                <span>
                                    The Case for Change
                                </span>
                            </h3>
                        </header>
                        <div className="content">
                            <div className="grid">
                                <section className="column">
                                    <h3>1.4m</h3>
                                    <p className="highlights">Number of computer-science-related jobs available in 2021</p>
                                    <h3>400,000</h3>
                                    <p className="highlights">Number of graduates with the skills to apply for those jobs</p>
                                </section>
                                <section className="column">
                                    <h3>8-10x</h3>
                                    <p className="highlights">Increase Likelihood that students from underserved backgrounds will pursue degrees in computer science if they have taken computer science in high school</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="content">
                    <h3>Goals</h3>
                    <ul>
                        <li>Unveil the magic behind technology to young people with limited access to computer science education through the Adafruit CPX.</li>
                        <li>Draw best practices from a Morgan Stanley employee designed and run program.</li>
                        <li>Leave with a Makerspace workshop blueprint for youth in your community.</li>
                    </ul>
                    <h3>Audience</h3>
                    <p>This workshop caters to software and hardware enthusiasts. It is especially useful to thos who are excited about leveraging devices to teach coding and electronics to young programmers!</p>
                    <ul>
                        <li>College Students</li>
                        <li>Educators</li>
                        <li>Corporate Technologists</li>
                        <li>Start Up Technologists</li>
                        <li>Non Profit Organization Technologists</li>
                        <li>Hobbyists</li>
                        <li>Parents with children learning from home</li>
                    </ul>
                </article>
            </div >
        </Layout >
    )
}

export default MakerspacePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
