import interests from "../../../../data/interests";
import "./Interests.css";

export default function Interests() {
  let elements = interests.map((a) => <span key={a}>{a}</span>);
  return <div className="interests-wrapper">{elements}</div>;
}
