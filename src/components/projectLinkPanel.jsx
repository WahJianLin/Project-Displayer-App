import React, { Component } from "react";

class ProjectLinkPanel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h6>
          Link: {this.props.link.projectLinkId}__{this.props.link.name}
        </h6>
      </React.Fragment>
    );
  }
}

export default ProjectLinkPanel;
