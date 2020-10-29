import React, { Component } from "react";
import ProfileLinkPanel from "./profileLinkPanel";
import ProjectLinkPanel from "./projectLinkPanel";

class Profile extends Component {
  state = { item: null, isLoaded: false };
  componentDidMount() {
    fetch(
      "https://project-displayer-api.herokuapp.com/profile/get/" +
        this.props.match.params.id
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ isLoaded: true, item: json });
      });
  }
  render() {
    var { isLoaded, item } = this.state;

    if (isLoaded) {
      return (
        <React.Fragment>
          <h2>Profile: {item.name}</h2>
          <h5>story: {item.story}</h5>
          {item.profileLinks.map((link) => (
            <ProfileLinkPanel
              key={link.profileLinkId}
              link={link}
            ></ProfileLinkPanel>
          ))}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <h1>Profile not loaded</h1>
      </React.Fragment>
    );
  }
}

export default Profile;
