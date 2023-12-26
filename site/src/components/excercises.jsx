import React from 'react';
import { Link } from 'gatsby';

const Exercises = ({ nodes }) => {
  return nodes.map((node) => {
    const title = node.frontmatter.title || node.fields.slug;
    return (
      <article key={node.fields.slug} className="content">
        <header>
          <h3>
            Exercise {node.frontmatter.exercise} | {node.frontmatter.title}
          </h3>
          <p>{node.frontmatter.description}</p>
        </header>
      </article>
    );
  });
};

export default Exercises;
