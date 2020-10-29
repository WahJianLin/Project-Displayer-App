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
                Hello everyone! My name is Jian LinThis is personal project I
                have been working on utilizing MySQL, Spring Boot, and React.
                This project is functionaly done, but I will be working to add
                to this as practice.
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
