import PropTypes from "prop-types";
import styles from "./SectionTitle.module.css";

export default function SectionTitle(props) {
  return (
    <div className={styles.sectionTitle}>
      <h3>{props.title.toUpperCase()}</h3>
      <hr />
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
