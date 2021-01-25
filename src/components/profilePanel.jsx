import React, { Component } from "react";

class ProfilePanel extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h4>Profile:{this.props.target.profileId}</h4>
        <p>{this.props.target.name}</p>
        <button value={this.props.target.profileId}>Profile</button>
        <a className="nav-link" href={this.getRef()}>
          Details <span className="sr-only">(current)</span>
        </a>
      </React.Fragment>
    );
  }
  getRef() {
    return "profile/" + this.props.target.profileId;
  }
}

export default ProfilePanel;
