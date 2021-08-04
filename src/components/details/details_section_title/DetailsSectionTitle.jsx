import capitalize from "../../../services/string_utilities.js";
import "./DetailsSectionTitle.css";

let DetailsSectionTitle = (props) => {
  return (
    <span className="details-section-title">{capitalize(props.title)}</span>
  );
};

export default DetailsSectionTitle;
