import React from "react"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  render() {
    const { location } = this.props

    const setupLinkStyle = {
      paddingBottom: location.pathname === "/setup" ? `5px` : `0px`,
      boxShadow: location.pathname === "/setup" ? `0px 1px 0px 0px black` : `none`
    }

    const blogLinkStyle = {
      paddingBottom: location.pathname === "/" ? `5px` : `0px`,
      boxShadow: location.pathname === "/" ? `0px 1px 0px 0px black` : `none`,
    }
    const continueLinkStyle = {
      paddingBottom: location.pathname === "/continue" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/continue" ? `0px 1px 0px 0px black` : `none`,
    }
    const aboutLinkStyle = {
      paddingBottom: location.pathname === "/about" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/about" ? `0px 1px 0px 0px black` : `none`,
    }

    return (
      <div className="header-main">
        <Link className="logo-link" to={`/`}>
          Intro to CPX
        </Link>

        <div className="header-nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <h1 className="li-h1" style={blogLinkStyle}>
                <Link className="li-link" to={`/`}>
                  Exercises
                </Link>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={setupLinkStyle}>
                <Link className="li-link" to={`/setup`}>
                  Setup
                </Link>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={continueLinkStyle}>
                <Link className="li-link" to={`/continue`}>
                  Continue Learning
                </Link>
              </h1>
            </li>
            <li
              style={{
                float: "left",
              }}
            >
              <h1 className="li-h1" style={aboutLinkStyle}>
                <Link className="li-link" to={`/about`}>
                  About
                </Link>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
