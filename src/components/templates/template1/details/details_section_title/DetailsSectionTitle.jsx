import capitalize from "../../../../../utilities/capitalize";
import styles from "./DetailsSectionTitle.module.css";

let DetailsSectionTitle = (props) => {
  return (
    <span className={styles.detailsSectionTitle}>
      {capitalize(props.title)}
    </span>
  );
};

export default DetailsSectionTitle;
