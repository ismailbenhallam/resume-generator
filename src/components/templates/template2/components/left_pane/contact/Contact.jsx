import {
  faGithub,
  faInternetExplorer,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBirthdayCake,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CoordinatesService from "../../../../../../services/coordinates";
import getUsernameFromNetworkUrl from "../../../../../../utilities/getUsernameFromNetworkUrl.js";
import "./Contact.css";

export default function Contact(props) {
  const service = new CoordinatesService();
  const informations = service.getAll();

  const calculateAge = (birthDate) => {
    const ageDifMs = Date.now() - new Date(birthDate).getTime();
    const ageDate = new Date(ageDifMs);
    return (
      Math.abs(ageDate.getUTCFullYear() - 1970) + " " + props.ageSuffix.trim()
    );
  };

  const formatBirthDate = (birthDate) => {
    const d = new Date(birthDate);
    return d
      .toLocaleDateString(informations.language, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .split(" ")
      .join(" ");
  };

  return (
    <div className="contact">
      <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
      <a href={"tel:" + informations.mobile}>{informations.mobile}</a>
      <FontAwesomeIcon className="icon" icon={faEnvelope} />
      <span>{informations.email}</span>
      <FontAwesomeIcon className="icon" icon={faBirthdayCake} />
      <span>
        {props.calculateAge
          ? calculateAge(informations.birthDate)
          : formatBirthDate(informations.birthDate)}
      </span>
      <FontAwesomeIcon className="icon" icon={faLinkedin} />
      <a href={informations.linkedin}>
        @{getUsernameFromNetworkUrl(informations.linkedin)}
      </a>
      <FontAwesomeIcon className="icon" icon={faGithub} />
      <a href={informations.github} target="_blank" rel="noreferrer">
        @{getUsernameFromNetworkUrl(informations.github)}
      </a>
      <FontAwesomeIcon className="icon" icon={faInternetExplorer} />
      <a href={informations.website} target="_blank" rel="noreferrer">
        {informations.website}
      </a>
    </div>
  );
}

Contact.defaultProps = {
  ageSuffix: "",
};
