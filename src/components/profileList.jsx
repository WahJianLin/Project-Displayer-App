import React, { Component } from "react";
import { allProfiles } from "../configs/links";
import DisplayCard from "./displayCard";
import "../styles/home.css";

class ProfileList extends Component {
  state = { items: [], isLoaded: false };
  componentDidMount() {
    fetch(allProfiles)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ isLoaded: true, profiles: json });
      });
  }
  render() {
    var { isLoaded, profiles } = this.state;

    if (isLoaded) {
      return (
        <React.Fragment>
          <h2>Profiles</h2>
          <div className="displayGrid">
            <div className="grid-container">
              {profiles.map((target) => (
                <DisplayCard
                  key={target.profileId}
                  id={target.profileId}
                  name={target.name}
                  description={target.story}
                  link="/profile/"
                  type="Profile"
                ></DisplayCard>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <h1>Loading...</h1>
        <p>
          Please note, this project is utilizing Heroku and Heroku falls to
          sleep if there is no activity
        </p>
      </React.Fragment>
    );
  }
}

export default ProfileList;

/*
<table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Story</th>
    </tr>
  </thead>
  <tbody>
    {profiles.map((target) => (
      <tr key={target.profileId}>
        <td>{target.name}</td>
        <td>{target.story}</td>
      </tr>
    ))}
  </tbody>
</table>
*/
