import React, { Component } from "react";
import ProjectPanel from "./projectPanel";

class ProjectList extends Component {
  state = { Projects: [], isLoaded: false };
  componentDidMount() {
    fetch("http://localhost:8080/project/all/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ isLoaded: true, Projects: json });
      });
  }
  render() {
    var { isLoaded, Projects } = this.state;
    if (isLoaded) {
      return (
        <React.Fragment>
          {Projects.map((target) => (
            <ProjectPanel key={target.projectId} target={target}></ProjectPanel>
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

/*<ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name}:{item.projectId}
              </li>
            ))}
          </ul>
*/

export default ProjectList;
