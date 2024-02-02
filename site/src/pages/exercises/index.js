import React from 'react';
import { graphql, Link } from 'gatsby';

import Hero from '../../components/hero';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const CurriculumPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="curriculum-main">
        <Hero
          title="Learn"
          subtitle="An interactive introduction to coding. Learn the basics through
          simple exercises designed to inspire."
        />
        <Seo title="Learn" />
        <article className="content">
          <h2>Single Day Programs</h2>
          <div>
            <h3>
              <Link to={`/exercises/circuitpython/level-1/`}>
                Intro to CircuitPython - Level 1
              </Link>
            </h3>
            <p>
              This is the original single day workshop with Circuit Playground
              Express and CircuitPython. Includes an overview of the board's
              sensors and lights through code. Allows students to dig into an
              aspect of the device they enjoy for an afternoon of exploration.{' '}
            </p>

            <h3>
              <Link to={`/exercises/circuitpython/level-2/`}>
                Coding with CircuitPython - Level 2
              </Link>
            </h3>
            <p>
              This course builds on the original single day workshop with
              Circuit Playground Express and CircuitPython to fill out the
              student's understanding of basic programming concepts.
            </p>
          </div>
        </article>
        <article className="content">
          <h2>Multi-week Programs</h2>
          <div>
            <h3>
              <Link to={`/exercises/makecode/intro`}>MakeCode</Link>
            </h3>
            <h4>Grades 5-7</h4>
            <p>
              Multi-week course with Circuit Playground Express and MakeCode.
              Best for beginners of ages 9-15, this graphical block based coding
              format translates to Javascript for a more comprehensive coding
              experience.
            </p>

            <h3>
              <Link to={`/exercises/circuitpython/`}>CircuitPython</Link>
            </h3>
            <h4>Grades 6-9</h4>
            <p>
              Based on the original single day workshop with Circuit Playground
              Express and CircuitPython. Starts with an overview of how to work
              with the board's sensors and lights through code and ends with a
              capstone project of the student's creation.
            </p>
            <ul>
              <li>
                <Link to={`/exercises/circuitpython/level-1/`}>
                  Intro to CircuitPython - Level 1
                </Link>
              </li>
              <li>
                <Link to={`/exercises/circuitpython/level-2/`}>
                  Coding with CircuitPython - Level 2
                </Link>
              </li>
            </ul>

            <h3>Robotics</h3>
            <h4>Grades 8-11</h4>
            <p>
              Learn the fundamentals of robotics through combining components
              such as sensors, servos and gears to an Adafruit CircuitPlayground
              Express microcontroller board.
            </p>
            <ul>
              <li>
                <Link to={`/exercises/makecode/robotics`}>
                  Robotics with MakeCode
                </Link>
              </li>
              <li>
                <Link to={`/exercises/circuitpython/robotics`}>
                  Advanced Robotics with CircuitPython
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default CurriculumPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
