import React, { Component } from "react";
import { allProjects } from "../configs/links";
import DisplayCard from "./displayCard";

class ProjectList extends Component {
  state = { projects: [], isLoaded: false };
  componentDidMount() {
    fetch(allProjects)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ isLoaded: true, projects: json });
      });
  }
  render() {
    var { isLoaded, projects } = this.state;

    if (isLoaded) {
      return (
        <React.Fragment>
          <h2>Projects</h2>
          <div className="displayGrid">
            <div className="grid-container">
              {projects.map((target) => (
                <DisplayCard
                  key={target.projectId}
                  id={target.projectId}
                  name={target.name}
                  description={target.description}
                  link="/project/"
                  type="Project"
                ></DisplayCard>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <h1>Loading...</h1>
        <p>
          Please note, this project is utilizing Heroku and Heroku falls to
          sleep if there is no activity
        </p>
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
