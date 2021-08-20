import { Fragment } from "react";
import LanguagesService from "../../../../../services/languages-service";
import "./Languages.css";

export default function Languages() {
  const service = new LanguagesService();
  const languages = service.getAll();
  let elements = Object.entries(languages).map((entry) => (
    <Fragment key={entry[0]}>
      <span>{entry[0]}</span>
      <span>{entry[1]}</span>
    </Fragment>
  ));

  return <div className="langagues-grid">{elements}</div>;
}
