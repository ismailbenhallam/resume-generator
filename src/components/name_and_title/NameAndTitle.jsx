import { Component } from "react";
import informations from "../../data/informations.js";
import "./NameAndTitle.css";

export default class NameAndTitle extends Component {
  render() {
    return (
      <div className="name-and-title" style={this.props.style}>
        <span className="name">
          {informations.firstName + " " + informations.lastName}
        </span>
        <br />
        <span>{informations.title}</span>
      </div>
    );
  }
}
