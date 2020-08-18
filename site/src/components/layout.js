import React from 'react'
import Header from './Header'

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
