import React, { Component } from "react";
import TagPill from "./tagPill";
import ProjectLinkPanel from "./projectLinkPanel";

class Project extends Component {
  state = { item: null, isLoaded: false };
  componentDidMount() {
    fetch("http://localhost:8080/project/get/" + this.props.match.params.id)
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
          <h2>Project: {item.name}</h2>
          {item.tags.map((tag) => (
            <TagPill key={tag.tagId} tag={tag}></TagPill>
          ))}
          <h5>Description: {item.description}</h5>
          {item.projectLinks.map((link) => (
            <ProjectLinkPanel
              key={link.projectLinkId}
              link={link}
            ></ProjectLinkPanel>
          ))}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <h1>Projects not loaded</h1>
      </React.Fragment>
    );
  }
}

export default Project;
