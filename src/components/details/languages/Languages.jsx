import languages from "../../../data/languages";
import "./Languages.css";

export default function Languages() {
  let elements = Object.entries(languages).map((entry) => (
    <>
      <span>{entry[0]}</span>
      <span>{entry[1]}</span>
    </>
  ));

  return <div className="langagues-grid">{elements}</div>;
}
