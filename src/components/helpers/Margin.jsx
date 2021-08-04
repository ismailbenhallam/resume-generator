import { Component } from "react";
import "./Margin.css";

export default class Margin extends Component {
  render() {
    return (
      <div style={{ margin: this.props.value }}>{this.props.children}</div>
    );
  }
}
