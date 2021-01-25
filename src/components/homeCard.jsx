import React, { Component } from "react";
import "../styles/card.css";
class HomeCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <div className="card-text">
              <h2>{this.props.name}</h2>
              <p>{this.props.bodyMsg}</p>
              <a href={this.props.link} className="btn btn-primary">
                View {this.props.name}
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeCard;
