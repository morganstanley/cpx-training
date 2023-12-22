import React from 'react';
import { Link, graphql } from 'gatsby';

import Hero from '../../../../components/hero';
import Layout from '../../../../components/layout';
import Seo from '../../../../components/seo';

import '../../../../styles/global.css';
import '../../../../styles/style.css';

const CPXLevel2Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const exercises = data.allMdx.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <div className="exercises-main">
        <Hero
          title="CPX Training Workshop"
          subtitle="CircuitPython - Level 2"
        />
        <Seo title="CircuitPython | Level 2" />
        <article className="content">
          <h2>
            Programming with CircuitPython on an Adafruit's Circuit Playground
            Express
          </h2>
          <h3>
            <Link to={`/setup`}>Start Here</Link>
          </h3>
          <p>
            If you haven't set up your Circuit Playground Express board to
            support CircuitPython yet, please refer to the{' '}
            <Link to={`/setup`}>setup instructions</Link>.
          </p>
        </article>
        {exercises.map((node) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header className="content">
                <h3>
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
              </header>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default CPXLevel2Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        internal: {
          contentFilePath: { regex: "/exercises/circuitpython/level-2//" }
        }
      }
      sort: [
        { frontmatter: { level: ASC } }
        { frontmatter: { exercise: ASC } }
      ]
    ) {
      nodes {
        id
        tableOfContents
        frontmatter {
          title
        }
        internal {
          contentFilePath
        }
        fields {
          slug
        }
      }
    }
  }
`;
