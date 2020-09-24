import React, { Component } from "react";

class ProfileLinkPanel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h6>
          Link: {this.props.link.profileLinkId}__{this.props.link.name}
        </h6>
      </React.Fragment>
    );
  }
}

export default ProfileLinkPanel;
