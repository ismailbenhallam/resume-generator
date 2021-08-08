import informations from "../../../../data/informations.js";
import capitalize from "../../../../services/string_utilities";
import "./NameAndTitle.css";

export default function NameAndTitle() {
  return (
    <div className="name-and-title">
      <div className="name">
        {capitalize(informations.firstName) +
          " " +
          informations.lastName.toUpperCase()}
      </div>
      <hr />
      <div className="title">{informations.title}</div>
    </div>
  );
}
