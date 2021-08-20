import CoordinatesService from "../../../../../services/coordinates";
import capitalize from "../../../../../utilities/capitalize";
import "./NameAndTitle.css";

export default function NameAndTitle() {
  const service = new CoordinatesService();
  let { firstName, lastName, title } = service.getAll();
  return (
    <div className="name-and-title">
      <div className="name">
        {(firstName ? `${capitalize(firstName)} ` : ``) +
          (lastName ? lastName.toUpperCase() : ``)}
        {!firstName && !lastName && `can you tell us your name please?`}
      </div>
      {title && (
        <>
          <hr />
          <div className="title">{title}</div>
        </>
      )}
    </div>
  );
}
