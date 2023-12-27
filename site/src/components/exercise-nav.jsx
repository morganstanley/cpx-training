import React from 'react';
import { Link } from 'gatsby';

function getLevels(nodes) {
  const potentialValues = [];
  nodes.forEach((node) => {
    if (!potentialValues.includes(node.frontmatter.level)) {
      potentialValues.push(node.frontmatter.level);
    }
  });
  return potentialValues;
}

const ExerciseNav = ({ location, nodes, toc }) => {
  const levels = getLevels(nodes);

  const ExerciseListItems = ({ location, nodes, toc }) => {
    return nodes.map((node) => {
      const current = location.pathname.includes(node.fields.slug);
      const title = node.frontmatter.title;
      return (
        <li className={current ? 'current' : ''}>
          <Link to={node.fields.slug}>
            {node.frontmatter.exercise} ) {title}
          </Link>
          {current && toc && (
            <nav className="nav exercise-content-nav">
              <ul>
                {toc.map((item) => (
                  <li>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </li>
      );
    });
  };

  return (
    <nav className="nav exercise-nav">
      {levels.map((level) => {
        const currentLevel = nodes.filter(
          (node) => node.frontmatter.level === level
        );
        return (
          <>
            {levels.length > 1 && <h3>Level {level}</h3>}
            <ul>
              <ExerciseListItems
                location={location}
                nodes={currentLevel}
                toc={toc}
              />
            </ul>
          </>
        );
      })}
    </nav>
  );
};

export default ExerciseNav;
