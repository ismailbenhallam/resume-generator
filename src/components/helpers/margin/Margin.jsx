import "./Margin.css";

export default function Margin(props) {
  return <div style={{ margin: props.value }}>{props.children}</div>;
}
