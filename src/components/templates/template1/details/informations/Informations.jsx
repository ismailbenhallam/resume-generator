import {
  faGithub,
  faInternetExplorer,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBirthdayCake,
  faEnvelope,
  faFlag,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import CoordinatesService from "../../../../../services/coordinates";
import calculateAge from "../../../../../utilities/calclulateAgeFromStringDate";
import getUsernameFromNetworkUrl from "../../../../../utilities/getUsernameFromNetworkUrl";
import "./Informations.css";

export default function Informations(props) {
  const {
    iconsStyle = { color: "white", fontSize: "18px" },
    textStyle = { color: "white" },
    ageSuffix = "",
    shouldCalculateAge = true,
  } = props;
  const service = new CoordinatesService();
  const informations = service.getAll();

  return (
    <div className="informations">
      <FontAwesomeIcon className="icon" icon={faEnvelope} style={iconsStyle} />
      <a
        href={"mailto:" + informations.email}
        target="_blank"
        rel="noreferrer"
        style={textStyle}>
        {informations.email}
      </a>
      <FontAwesomeIcon
        className="icon"
        icon={faMapMarkerAlt}
        style={iconsStyle}
      />
      <span style={textStyle}>{informations.address}</span>
      <FontAwesomeIcon
        className="icon"
        icon={faBirthdayCake}
        style={iconsStyle}
      />
      <span style={textStyle}>
        {shouldCalculateAge
          ? calculateAge(informations.birthDate, ageSuffix)
          : informations.birthDate}
      </span>
      <FontAwesomeIcon className="icon" icon={faLinkedin} style={iconsStyle} />
      <a href={informations.linkedin} style={textStyle}>
        @{getUsernameFromNetworkUrl(informations.linkedin)}
      </a>
      <FontAwesomeIcon className="icon" icon={faGithub} style={iconsStyle} />
      <a
        href={informations.github}
        target="_blank"
        rel="noreferrer"
        style={textStyle}>
        @{getUsernameFromNetworkUrl(informations.github)}
      </a>
      <FontAwesomeIcon className="icon" icon={faFlag} style={iconsStyle} />
      <span style={textStyle}>{informations.nationality}</span>
      <FontAwesomeIcon className="icon" icon={faMobileAlt} style={iconsStyle} />
      <a
        href={"tel:" + informations.mobile}
        target="_blank"
        rel="noreferrer"
        style={textStyle}>
        {informations.mobile}
      </a>
      <FontAwesomeIcon
        className="icon"
        icon={faInternetExplorer}
        style={iconsStyle}
      />
      <a
        href={informations.website}
        target="_blank"
        rel="noreferrer"
        style={textStyle}>
        {informations.website}
      </a>
    </div>
  );
}

Informations.propTypes = {
  iconsStyle: PropTypes.object,
  textStyle: PropTypes.object,
  ageSuffix: PropTypes.string,
  shouldCalculateAge: PropTypes.bool,
};
