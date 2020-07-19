import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SetupPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Setup" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>

        <h1>Start Here</h1>
        <h3>What is the Circuit Playground Express?</h3>
        <p>The Circuit Playground Express is an all-in-one circuit board 
            featuring a processor, sensors, LEDs, USB and more!
        </p>

        <h3>In Detail</h3>
        <div >
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
        </div>

        <h3>What Do I Need?</h3>
        <ul>
            <li>Your Circuit Playgroud Express</li>
            <li>
                <p>
                    MU Editor <s/>
                    <a href="https://codewith.mu/">Download Here</a> 
                </p>
            </li>
        </ul>

        <h3>Getting Going</h3>
        <ul>
            <li>Connect your Circuit Playgroud Express to your computer.</li>
            <li>Check the device shows up as a Disk Drive in File Exporer
                with the name CIRCUITPY.
            </li>
            <li>If it does not show up, try hitting the reset button on the CPX device.</li>
            <li>Launch the Mu Editor - choose Adafruit CircuitPython mode.</li>
            <li>Save the file that you create to your CIRCUITPY disk, and name it main.py</li>
        </ul>

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

        <h3>Be Inspired</h3>
        <p>Images & video here</p>

        

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
