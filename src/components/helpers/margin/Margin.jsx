import { PureComponent } from "react";
import "./Margin.css";

export default class Margin extends PureComponent {
  render() {
    return (
      <div style={{ margin: this.props.value }}>{this.props.children}</div>
    );
  }
}
