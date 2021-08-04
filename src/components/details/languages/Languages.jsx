import { Fragment } from "react";
import languages from "../../../data/languages";
import "./Languages.css";

export default function Languages() {
  let elements = Object.entries(languages).map((entry) => (
    <Fragment key={entry[0]}>
      <span>{entry[0]}</span>
      <span>{entry[1]}</span>
    </Fragment>
  ));

  return <div className="langagues-grid">{elements}</div>;
}
