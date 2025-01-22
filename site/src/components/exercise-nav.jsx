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

const ExerciseListItems = ({ location, nodes, toc }) => {
  return nodes.map((node, i) => {
    const isCurrentPage = location.pathname.includes(node.fields.slug);
    const language = node.frontmatter.language || 'en-US';
    const isCurrentLanguage = location.pathname.includes(language);
    const title = node.frontmatter.title;
    if(isCurrentLanguage) {
      return (
        <li className={isCurrentPage ? 'current' : ''} key={`exercise-${i}`}>
          <Link to={node.fields.slug}>
            {node.frontmatter.exercise} ) {title}
          </Link>
          {isCurrentPage && toc && (
            <nav className="nav exercise-content-nav">
              <ul>
                {toc.map((item, j) => (
                  <li key={`toc-${j}`}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </li>
      );
    }
  });
};

const ExerciseNav = ({ location, nodes, toc }) => {
  const levels = getLevels(nodes);
  return (
    <nav className="nav exercise-nav">
      {levels.map((level, i) => {
        const currentLevel = nodes
          .filter(
            (node) =>
              node.frontmatter.level === level && !!node.frontmatter.exercise
          )
          .sort((a, b) => a.exercise - b.exercise);
        return (
          <div key={`level-${i}`}>
            {level !== null && <h3>Level {level}</h3>}
            <ul>
              <ExerciseListItems
                location={location}
                nodes={currentLevel}
                toc={toc}
              />
            </ul>
          </div>
        );
      })}
    </nav>
  );
};

export default ExerciseNav;
