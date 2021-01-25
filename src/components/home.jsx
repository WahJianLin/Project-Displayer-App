import React, { Component } from "react";
import "../styles/home.css";
import { testProfiles } from "../configs/links";
import HomeCard from "./homeCard";
class Home extends Component {
  state = { isLoaded: false };
  componentDidMount() {
    fetch(testProfiles);
  }
  render() {
    return (
      <React.Fragment>
        <main role="main" className="inner cover">
          <div className="upperSection">
            <div className="titleBox">
              <div>
                <h1 className="cover-heading">WJL Project Displayer</h1>
                <div className="landingMsg">
                  <br></br>
                  <p className="lead">
                    Hello everyone! My name is Jian Lin. This is a personal
                    project I have been working on utilizing MySQL, Java Spring
                    Boot, and React. The project front end is being hosted on
                    Netlify for free. The backend and database are being hosted
                    by Heroku. Heroku is another free resource that can be used
                    to host backend API's and even has its own databases for the
                    API's to use. The only downside is that the API falls asleep
                    if it is not being triggered for a certain amount of time.
                    Both Netlify and Heroku are set up with automatic deployment
                    pipeline. The project currently is not set up for mobile
                    viewing. That will be the next step for the project. Oh and
                    getting more projects posted here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lowerSection">
            <div className="grid-container">
              <div className="item1">
                <HomeCard
                  name={"Projects"}
                  bodyMsg={
                    "Projects are personal project that my friends or I have made. These can be any type of projects ranging from mobile apps to websites. The next fuctionality I will be adding to this part will be tags."
                  }
                  link={"/projects"}
                ></HomeCard>
              </div>
              <div className="item2">
                <HomeCard
                  name={"Profiles"}
                  bodyMsg={
                    "Profiles are the people who are creating the projects. There may be one or more people working at any of the given projects. The next funcitonality will be adding in contact info which might just be an email."
                  }
                  link={"/profiles"}
                ></HomeCard>
              </div>
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
