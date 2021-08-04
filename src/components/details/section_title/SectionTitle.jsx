import capitalize from "../../../services/string_utilities.js";
import "./SectionTitle.css";

let SectionTitle = (props) => {
  return <span className="section-title">{capitalize(props.title)}</span>;
};

export default SectionTitle;
