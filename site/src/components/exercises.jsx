import React from 'react';
import { Link } from 'gatsby';

const ExerciseList = ({ nodes }) => {
  return nodes.map((node) => {
    return (
      <article key={node.fields.slug} className="content">
        <header>
          <h3>
            <Link to={node.fields.slug}>
              Exercise {node.frontmatter.exercise} | {node.frontmatter.title}
            </Link>
          </h3>
          <p>{node.frontmatter.description}</p>
        </header>
      </article>
    );
  });
};

export default ExerciseList;
