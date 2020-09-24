import React, { Component } from "react";
import TagPill from "./tagPill";

class ProjectPanel extends Component {
  state = { tags: [] };
  render() {
    var tags = this.props.target.tags;
    console.log(this.props);
    return (
      <React.Fragment>
        <h4>Project: {this.props.target.projectId}</h4>
        <p>{this.props.target.name}</p>
        {tags.map((tag) => (
          <TagPill key={tag.tagId} tag={tag}></TagPill>
        ))}
        <button value={this.props.target.projectId}>Project</button>
        <a className="nav-link" href={this.getRef()}>
          Details <span className="sr-only">(current)</span>
        </a>
      </React.Fragment>
    );
  }
  getRef() {
    return "project/" + this.props.target.projectId;
  }
}

/*
<ul>
    {items.map((item) => (
    <li key={item.tagId}>
        {item.tagId}:{item.name}
    </li>
    ))}
</ul>
*/

export default ProjectPanel;
