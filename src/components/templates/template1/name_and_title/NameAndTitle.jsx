import CoordinatesService from "../../../../services/coordinates.js";
import capitalize from "../../../../utilities/capitalize";
import styles from "./NameAndTitle.module.css";

export default function NameAndTitle() {
  let service = new CoordinatesService();
  let { firstName, lastName, title } = service.getAll();
  return (
    <div className={styles.nameAndTitle}>
      {(firstName || lastName) && (
        <>
          <span className={styles.name}>
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
