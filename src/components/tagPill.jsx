import React, { Component } from "react";

class TagPill extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h6>
          Tag: {this.props.tag.tagId}__{this.props.tag.name}
        </h6>
      </React.Fragment>
    );
  }
}

export default TagPill;
