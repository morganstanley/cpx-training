import React from 'react';
import { Link } from 'gatsby';

const Header = ({ location }) => {
  const links = {
    Learn: '/exercises',
    Teach: '/teach',
    'Make a Makerspace': '/makerspace',
    'About': '/about',
  };

  function menuLink(text) {
    const path = links[text];
    const classname =
      path === location.pathname ? 'nav-link-current' : 'nav-link';

    return (
      <li key={text}>
        <Link className={classname} to={path}>
          {text}
        </Link>
      </li>
    );
  }

  return (
    <div className="content">
      <h1>
        <Link className="logo-link" to={`/`}>
          Makerspace
        </Link>
      </h1>

      <div className="header-nav">
        <ul>{Object.keys(links).map(menuLink)}</ul>
      </div>
    </div>
  );
};

export default Header;
