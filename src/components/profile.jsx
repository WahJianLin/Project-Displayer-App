import React, { Component } from "react";
import { getProfile } from "../configs/links";

class Profile extends Component {
  state = { item: null, isLoaded: false };
  componentDidMount() {
    fetch(getProfile + this.props.match.params.id)
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
                          <b>Profile:</b> {item.name}
                        </h3>
                        <p className="card-text">{item.story}</p>
                        <hr></hr>
                        <div>
                          <h5 className="text-muted">Projects</h5>
                          {item.projects.map((target) => (
                            <span key={target.projectId} className="related">
                              <a href={"/project/" + target.projectId}>
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
                      {item.profileLinks.map((target) => (
                        <li
                          key={target.profileLinkId}
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
        <h1>Profile not loaded</h1>
      </React.Fragment>
    );
  }
}

export default Profile;

/*
<div class="card-footer text-muted">
                          {item.contactInfoId.email}
                        </div>
*/
