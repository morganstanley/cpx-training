import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SetupPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="setup-main">
        <article className="hero">
          <img src="images/happy.jpg" className="background-image" alt="Student with CPX Board" />
          <div className="pane">
            <header className="content">
              <h2>
                <span>Initial Setup Adafruit's Circuit Playground Express</span>
              </h2>
            </header>
          </div>
        </article>
        <SEO title="Setup" />
        <div className="content">
          <article>
            <header>
              <h2>Start Here</h2>
            </header>
            <h3>What is the Circuit Playgroud Express?</h3>
            <p>The Circuit Playgroud Express is an all-in-one circuit board
            featuring a processor, sensors, LEDs, USB and more that you can program:</p>
            <ul>
              <li>10 Mini NeoPixel LEDs</li>
              <li>Accelerometer</li>
              <li>Temperature Sensor</li>
              <li>Light Sensor</li>
              <li>Sound Sensor</li>
              <li>Infrared Transmitter / Receiver</li>
              <li>Mini Speaker</li>
              <li>Two Push Buttons</li>
              <li>Slide Switch</li>
              <li>Seven Touch Pads</li>
            </ul>

            <h3>What Do I Need?</h3>
            <ol>
              <li>Your Circuit Playgroud Express</li>
              <li>
                <p>
                  MU Editor <a href="https://codewith.mu/">Download Here</a>
                </p>
              </li>
            </ol>

            <h3>Getting Going</h3>
            <ol>
              <li>After downloading the MU Editor (link above), install it.</li>
              <li>You will need to install CircuitPython on to your CPX board (extra detail <s />
                <a href="https://learn.adafruit.com/welcome-to-circuitpython/installing-circuitpython">here</a>).
                <ul>
                  <li>Go to the CircuitPython site <a href="https://circuitpython.org/board/circuitplayground_express/">here</a> <s />
                and follow the download steps for the latest stable release.
                  </li>
                  <li>Connect your Circuit Playgroud Express to your computer via USB and press the reset button.</li>
                  <li>The device should display as a Disk Drive named CPLAYBOOT (if instead it appears as CIRCUITPY, skip ahead to #3.</li>
                  <li>Find the .uf2 CircuitPython file you downloaded; drag and drop it onto the CPLAYBOOT drive (this will install CircuitPython on your CPX).</li>
                  <li>Wait for a few seconds, the lights should flash and the device should reconnect and reappear named CIRCUITPY.</li>
                </ul>
              </li>

              <li>Launch the MU Editor
              <ul>
                  <li>Choose Adafruit CircuitPython mode.</li>
                  <li>Save your code to the CIRCUITPY disk and name it main.py.</li>
                </ul>
              </li>

            </ol>

            <h3>More on Mu Editor</h3>
            <p>Choose the Adafruit CircuitPython mode for this session.
            There are other modes you can choose to explore here later
            in your own time!
        </p>
            <p>Mu Editor has a 'checker' button which checks that your code
            can be understood correctly and will highlight any errors.
        </p>
            <p>The Serial button listens to your CPX board for any data being
            emitted. It can be used in conjunction with the Plotter to
            show this data graphically.
        </p>

          </article>
        </div>
      </div>
    </Layout>
  )
}

export default SetupPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
