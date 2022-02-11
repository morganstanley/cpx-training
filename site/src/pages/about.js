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
                    <p>An employee designed and run program bringing one-off STEM-based interactive workshops to children and teens.</p>
                    <p>Our most common workshop marries Python programming and hardware with the Adafruit Circuit Playground Express (CPX), a beginner friendly microcontroller that provides fast feedback necessary for new programmers.</p>
                    <p>We launched our Morgan Stanley Makerspace program with the hope that it would – in the long-term – drive greater digital literacy amongst the young people we’d engage. For as long as the digital industry has thrived in the United States, there has been a gap between those who have access to technology and those who do not. This digital divide is not just access to reliable and affordable internet service, but equitable access to fundamental technology education required to ensure digital literacy and economic opportunity in our ever evolving and increasingly virtual world.</p>
                    <p>Since the program's launch in 2018, 500+ children and teens have participated dozens of different workshops; 50% of participants resided in a NYC shelter at the time of participation.</p>
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

                <SEO title="STEM Extension" />
                <article className="content">
                    <h2>What is Morgan Stanley STEM Extension?</h2>
                    <p>Morgan Stanley's STEM Extension program takes our Makerspace workshops to the next-level, providing week-on-week sustained engagement with cohorts of students across New York, New Jersey, and Maryland.</p>
                    <p>The new initiative leverages physical computing through the Raspberry Pi 400 computer and the Adafruit Feather Wing controllers, in addition to the Adafruit Circuit Playground Express, to teach the fundamentals of computer science education. The end goal? Connect students with limited access to computer science education, helping them move beyond being a consumer of technology into a self-sufficient digital citizen.</p>
                </article>

                <SEO title="Adafruit Circuit Playground Express" />
                <article className="content">
                    <h2>Why Adafruit Circuit Playground Express?</h2>
                    <p>Adafruit Industries, the manufacturer of CPX was founded by MIT engineering pioneer. Limor "Lady Ada" Fried. We are proud to support Adafruit Industries as a 100% women-owned top ranked manufacturing company in the US. When establishing the company, Limor's goal was to create the best place online for learning electronics and making the best designed products for makers of all ages and skill-levels. </p>
                    <p>The Adafruit CPX is just that - an all-in-one circuit design board packed full of features such as a processor, sensors, mini-speakers, LED lights, and a USB port for streamlined software integration and a fast feedback loop. The circuit is also multi-device compatible which means it runs successfully across almost any of your favorite operating systems including Windows, Mac, Chromebook and Linux.</p>
                    <p>Once your CPX device is connected to a computer, you can begin programming interactive projects in a matter of minutes.</p>
                    <p>The CPX also supports user choice in the programming environment and language they wish to code. Students can implement programs using Python, Microsoft Make Code, C/C++ and JavaScript.</p>
                </article>

                <SEO title="Why Raspberry Pi?" />
                <article className="content">
                    <h2>Why Raspberry Pi?</h2>
                    <p>The Raspberry Pi foundation is a UK-based charity that works to put the power of computing and digital making into the hands of people all over the world. The nonprofit was born from a desire to enough more hands-on computer education to students and teachers alike.</p>
                    <p>Through their innovative Raspberry Pi devices, a single-board computer, students can engage deeply with computer science education at a low cost. Unlike a traditional computer, which hides its inner working, a standard Raspberry Pi has all it's components, ports, and features out on display. </p>
                    <p>The Raspberry Pi also encourages students to think creatively about tasks in a complex, non-linear way.</p>
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
