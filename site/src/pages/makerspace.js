import React from 'react';
import { graphql } from 'gatsby';

import Makerspace from '../../content/makerspace.mdx';

import Layout from '../components/layout';
import Seo from '../components/seo';

const MakerspacePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <div className="makerspace-main">
        <article className="hero">
          <img
            src="images/learning.jpg"
            className="background-image"
            alt="Student with CPX Board"
          />
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
        <Seo title="Make a Makerspace" />
        <article className="content">
          <Makerspace />
        </article>
      </div>
    </Layout>
  );
};

export default MakerspacePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
