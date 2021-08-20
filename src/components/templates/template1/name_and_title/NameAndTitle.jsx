import CoordinatesService from "../../../../services/coordinates.js";
import capitalize from "../../../../utilities/capitalize";
import "./NameAndTitle.css";

export default function NameAndTitle() {
  let service = new CoordinatesService();
  let { firstName, lastName, title } = service.getAll();
  return (
    <div className="name-and-title">
      {(firstName || lastName) && (
        <>
          <span className="name">
            {(firstName ? capitalize(firstName) + " " : "") +
              (lastName ? lastName.toUpperCase() : "")}
          </span>
          <br />
        </>
      )}
      {title && <span>{title}</span>}
    </div>
  );
}
