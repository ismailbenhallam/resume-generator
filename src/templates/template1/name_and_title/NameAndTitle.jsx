import informations from "../../../data/informations.js";
import capitalize from "../../../services/string_utilities.js";
import "./NameAndTitle.css";

export default function NameAndTitle() {
  return (
    <div className="name-and-title">
      <span className="name">
        {capitalize(informations.firstName) +
          " " +
          informations.lastName.toUpperCase()}
      </span>
      <br />
      <span>{informations.title}</span>
    </div>
  );
}
