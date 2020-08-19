import React from 'react'
import { Link } from 'gatsby'

const Header = ({ location }) => {
  const links = {
    Home: '/',
    Setup: '/setup',
    Continue: '/continue',
    About: '/about'
  };

  function menuLink(text) {
    const path = links[text];
    const classname = (path === location.pathname) ? 'nav-link-current' : 'nav-link';

    return (
      <li key={text}>
        <Link className={classname} to={path}>
          {text}
        </Link>
      </li>
    )
  }

  return (
    <div className="header-main">
      <h1>
        <Link className="logo-link" to={`/`}>
          Makerspace
        </Link>
      </h1>

      <div className="header-nav">
        <ul>
          {Object.keys(links).map(menuLink)}
        </ul>
      </div>
    </div>
  )
}

export default Header
