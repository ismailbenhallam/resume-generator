import assets from "../../../data/assets.js";
import "./Assets.css";

export default function Assets() {
  let elements = assets.map((a) => <span>{a}</span>);
  return <div className="assets-wrapper">{elements}</div>;
}
