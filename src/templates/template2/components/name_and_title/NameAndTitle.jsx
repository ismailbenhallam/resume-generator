import CoordinatesService from "../../../../services/coordinates";
import capitalize from "../../../../utilities/capitalize";
import "./NameAndTitle.css";

export default function NameAndTitle() {
  const service = new CoordinatesService();
  let informations = service.getAll();
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
