import React from 'react'
import Header from './header'

function Layout({ location, title, children }) {
  return (
    <div className="main">
      <header>
        <Header location={location} />
      </header>
      <main className="body-main">
        {children}
      </main>
    </div>
  )
}

export default Layout
