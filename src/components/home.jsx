import React, { Component } from "react";
import "../styles/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Cover your page.</h1>
          <p className="lead"></p>
          <p className="lead"></p>
        </main>

        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p></p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
