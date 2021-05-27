import React, { Component } from "react";
import "../styles/card.css";
class DisplayCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div key={this.props.id} className="card">
          <div className="img-box">
            <img className="img-card" src={this.props.img}></img>
          </div>
          <div className="card-text">
            <h2>{this.props.name}</h2>
          </div>
          <div>
            <a
              href={this.props.link + this.props.id}
              className="btn btn-primary"
            >
              View {this.props.type}
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayCard;

/*
<button
              type="button"
              class="btn btn-primary"
              onclick="location.href = 'https://google.com';"
              value={this.props.id}
            >
              View {this.props.type}
            </button>
            <p>{this.props.description}</p>
*/
