import React, { Component } from "react";
import ProfilePanel from "./profilePanel";
import ProjectPanel from "./projectPanel";

class ProfileList extends Component {
  state = { items: [], isLoaded: false };
  componentDidMount() {
    fetch("https://project-displayer-api.herokuapp.com/profile/all/")
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
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Story</th>
              </tr>
            </thead>
            <tbody>
              {Profiles.map((target) => (
                <tr key={target.profileId}>
                  <td>{target.name}</td>
                  <td>{target.story}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    );
  }
}

export default ProfileList;
