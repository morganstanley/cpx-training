import React from "react"
import { rhythm } from "../utils/typography"
import Header from "./Header"

function Layout({ location, title, children }) {
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1)} ${rhythm(2 / 4)} 0 ${rhythm(2 / 4)} `,
        fontFamily: `Montserrat`,
      }}
    >
      <header>
        {" "}
        <Header location={location} />{" "}
      </header>
      <main
        style={{
          minHeight: `calc(100vh - 120px)`,
          border: `0.5px solid #EEEEEE`,
          borderBottom: `0px`,
          borderRadius: `10px 10px 0px 0px`,
          paddingLeft: `30px`,
          paddingRight: `30px`,
          paddingTop: `-20px`,
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
