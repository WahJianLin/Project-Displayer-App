import React, { Component } from "react";
import ProfilePanel from "./profilePanel";
import ProjectPanel from "./projectPanel";

class ProfileList extends Component {
  state = { items: [], isLoaded: false };
  componentDidMount() {
    fetch("http://localhost:8080/profile/all/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ isLoaded: true, Profiles: json });
      });
  }
  render() {
    var { isLoaded, Profiles } = this.state;
    if (isLoaded) {
      return (
        <React.Fragment>
          {Profiles.map((target) => (
            <ProfilePanel key={target.profileId} target={target}></ProfilePanel>
          ))}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <h1>Profiles not loaded</h1>
      </React.Fragment>
    );
  }
}

export default ProfileList;
