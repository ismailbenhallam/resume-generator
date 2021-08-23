import "./Margin.css";

export default function Margin({ value, children }) {
  return <div style={{ margin: value }}>{children}</div>;
}
