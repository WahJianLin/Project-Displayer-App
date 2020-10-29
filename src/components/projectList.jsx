import React, { Component } from "react";
import ProjectPanel from "./projectPanel";

class ProjectList extends Component {
  state = { Projects: [], isLoaded: false };
  componentDidMount() {
    fetch("https://project-displayer-api.herokuapp.com/project/all/")
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
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Project Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {Projects.map((target) => (
                <tr key={target.projectId}>
                  <td>{target.name}</td>
                  <td>{target.description}</td>
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
