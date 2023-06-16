import React from 'react'

import Header from './header'

function Layout({ location, title, children }) {
  return (
    <div className="main">
      <header className="header-main">
        <Header location={location} />
      </header>
      <main className="body-main">{children}</main>
      <footer className="footer-main">
        <div className="content">
          Thanks! We hope you found what you are looking for. Please feel free
          to contribute via{' '}
          <a
            href="https://github.com/MorganStanley/cpx-training"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </div>
      </footer>
    </div>
  )
}

export default Layout
