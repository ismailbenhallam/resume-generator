import CoordinatesService from "../../../../services/coordinates.js";
import capitalize from "../../../../utilities/capitalize";
import "./NameAndTitle.css";

export default function NameAndTitle() {
  let service = new CoordinatesService();
  let informations = service.getAll();
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
