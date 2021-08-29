import CoordinatesService from "../../../../../services/coordinates";
import capitalize from "../../../../../utilities/capitalize";
import styles from "./NameAndTitle.module.css";

export default function NameAndTitle() {
  const service = new CoordinatesService();
  let { firstName, lastName, title } = service.getAll();
  return (
    <div className={styles.nameAndTitle}>
      <div className={styles.name}>
        {(firstName ? `${capitalize(firstName)} ` : ``) +
          (lastName ? lastName.toUpperCase() : ``)}
        {!firstName && !lastName && `can you tell us your name please?`}
      </div>
      {title && (
        <>
          <hr className={styles.hr} />
          <div className={styles.title}>{title}</div>
        </>
      )}
    </div>
  );
}
