import React, { Component } from "react";
import { getProject } from "../configs/links";

class Project extends Component {
  state = { item: null, isLoaded: false };
  componentDidMount() {
    fetch(getProject + this.props.match.params.id)
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
          <div className="dataSection">
            <div>
              <div className="row">
                <div className="col-9">
                  <div className="card border-dark">
                    <div className="data-body">
                      <div className="card-body">
                        <h3 className="card-title">
                          <b>Project:</b> {item.name}
                        </h3>
                        <p className="card-text">{item.description}</p>
                        <hr></hr>
                        <div>
                          <h5 className="text-muted">Contributers</h5>
                          {item.profiles.map((target) => (
                            <span key={target.profileId} className="related">
                              <a href={"/profile/" + target.profileId}>
                                {target.name}
                              </a>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3 linkSection">
                  <div className=" card border-dark">
                    <div className="card-header">Links</div>
                    <ul className="list-group list-group-flush">
                      {item.projectLinks.map((target) => (
                        <li
                          key={target.projectLinkId}
                          className="list-group-item"
                        >
                          <a href={target.link} target="_blank">
                            {target.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <h1>Projects not loaded</h1>
        <br></br>
        <p>
          Please note, this project is utilizing Heroku and Heroku falls to
          sleep if there is no activity
        </p>
      </React.Fragment>
    );
  }
}

export default Project;

/*
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
*/

/*
{item.profiles.map((target) => (
                            <a href={target.link}>{target.name}</a>
                          ))}

                           {item.profileLinks.map((target) => (
                        <li className="list-group-item">
                          <a href={target.link}>{target.name}</a>
                        </li>
                      ))}
*/
