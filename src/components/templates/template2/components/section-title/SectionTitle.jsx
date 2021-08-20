import PropTypes from "prop-types";
import "./SectionTitle.css";

export default function SectionTitle(props) {
  return (
    <div className="section-title">
      <h3>{props.title.toUpperCase()}</h3>
      <hr />
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
