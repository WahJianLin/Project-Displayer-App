import React, { Component } from "react";
import "../styles/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main role="main" className="inner cover">
          <div className="titleBox">
            <h1 className="cover-heading">WJL Project Displayer</h1>
            <div className="landingMsg">
              <br></br>
              <p className="lead">
                Hello everyone! My name is Jian Lin. This is a personal project
                I have been working on utilizing MySQL, Java Spring Boot, and
                React. This project is functionaly done, but it is still in
                development for improvement.
              </p>
            </div>
          </div>
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
