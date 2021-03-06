import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          WJL
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profiles">
                Profiles
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
