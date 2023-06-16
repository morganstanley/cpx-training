import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const InstructorPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="trainer-main">
        <article className="hero">
          <img
            src="images/chelci-beth.jpg"
            className="background-image"
            alt="Instructors around a podium"
          />
          <div className="pane">
            <header className="content">
              <h2>
                <span>Instructor Notes</span>
              </h2>
            </header>
          </div>
        </article>
        <Seo title="Instructor Notes" />
        <article className="content">
          <h2>Mission &amp; Philosophy</h2>
          <p>
            Train the trainer sessions are a starting point for volunteers of
            all backgrounds to gather in a space and learn what goes into a
            Morgan Stanley Makerspace session. There will be a presentation of
            the curriculum, the opportunity to gain some hands on experience
            with the CPX device, and a discussion of the philosphy with which we
            run our makerspaces.
          </p>
          <p />
          <p>
            The Morgan Stanley Makerspaces are designed to introduce
            participants to coding and making with the Adafruit CPX device as a
            starting platform.
          </p>
          <p />
          <p>
            The philosophy of Makerspace is one of discovery, experimentation
            and passion. The curriculum is not used as a test or a required
            standard to be achieved, but a jumping off point.
          </p>
          <p />
          <p>
            We hope that by the end of the session, the participants will have
            cultivated a desire to delve deeper and learn more about whichever
            aspect of technology inspired them.
          </p>
        </article>
        <article className="content">
          <h2>Tips and Tricks from Experience Instructors</h2>
          <h3>General Guidance</h3>
          <ul>
            <li>
              Give students time and space to explore what catches their
              interest in each exercise.
            </li>
            <li>
              Feel free to make mistakes in front of them and say that you don't
              know something. Let them know you are learning too.
            </li>
            <li>
              When you don't know something, work through it out loud with the
              group. The troubleshooting process is a valuable skill to learn
              even if they don't take to coding.
            </li>
            <li>
              If your group shows an interest in a certain aspect of a lession
              (color theory, music notes, etc), dive into it! This is what we
              are hoping for! Don't stress about the number of lessons. This
              moment is the most valuable learning moment.
            </li>
            <li>
              If the lessons seem easy to your group, add challenges and
              encourage creativity.
            </li>
          </ul>
          <h3>Remote Lessons</h3>
          <ul>
            <li>
              Give students quiet time to work through the code. Check in by
              name in a rotating fashion.
            </li>
            <li>
              Share your screen and demonstrate examples with your webcam if
              possible.
            </li>
            <li>
              Encourage students to keep their camera on and mics unmuted to
              foster troubleshooting when needed and natural conversation.
            </li>
            <li>
              Encourage students to share their screen when troubleshooting.
            </li>
          </ul>
        </article>
      </div>
    </Layout>
  )
}

export default InstructorPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
