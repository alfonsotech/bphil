import React from "react"
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import "./Nav.css"

const Nav = () => (
  <nav className="navbar">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-ex1-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand" to="/">
          Public Philosophy Platform <small><small><small><small>(Beta)</small></small></small></small>
        </Link>

      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav navbar-left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/paths">Paths</Link>
          </li>
          <li>
            <Link to="/tribes">Tribes</Link>
          </li>
          <li>
            <Link className="submit-button" to="/submit">Submit</Link>
          </li>

        </ul>
        <ul className="nav navbar-nav navbar-right">
          {/* <li>
            <a target="_blank"  rel="noopener noreferrer" href="#">
              <img className="patreon-logo" src="/patreon-logo.png" alt="patreon-logo"></img>
            </a>
          </li> */}
          <li>
            <a target="_top"  rel="noopener noreferrer" href="mailto:thinkphilosophy@nym.hush.com?Subject=Inquiry%20About%20PPP">
              <FontAwesome
                className='nav-social-button'
                name='envelope'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </a>
          </li>
          <li>
            <a target="_blank"  rel="noopener noreferrer" href="https://twitter.com/tPhilosophia">
              <FontAwesome
                className='nav-social-button'
                name='medium'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </a>
          </li>

          <li>
            <a target="_blank"  rel="noopener noreferrer" href="https://twitter.com/tPhilosophia">
              <FontAwesome
                className='nav-social-button'
                name='twitter'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </a>
          </li>


        </ul>
      </div>

    </div>
  </nav>
)

export default Nav;
