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
import { PureComponent } from "react";
import informations from "../../../../../data/informations";
import "./Contact.css";

export default class Contact extends PureComponent {
  render() {
    return (
      <div className="contact">
        <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
        <a href={"tel:" + informations.mobile}>{informations.mobile}</a>
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        <span>{informations.email}</span>
        <FontAwesomeIcon className="icon" icon={faBirthdayCake} />
        <span>
          {this.props.calculateAge
            ? this.calculateAge(informations.birthDate)
            : this.formatBirthDate(informations.birthDate)}
        </span>
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <a href={informations.linkedin}>@{informations.linkedinUsername}</a>
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <a href={informations.github} target="_blank" rel="noreferrer">
          @{informations.githubUsername}
        </a>
        <FontAwesomeIcon className="icon" icon={faInternetExplorer} />
        <a href={informations.webSite} target="_blank" rel="noreferrer">
          {informations.webSite}
        </a>
      </div>
    );
  }
  calculateAge = (birthDate) => {
    var ageDifMs = Date.now() - new Date(birthDate).getTime();
    var ageDate = new Date(ageDifMs);
    return (
      Math.abs(ageDate.getUTCFullYear() - 1970) +
      " " +
      this.props.ageSuffix.trim()
    );
  };

  formatBirthDate = (birthDate) => {
    let d = new Date(birthDate);
    return d
      .toLocaleDateString(informations.language, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .split(" ")
      .join(" ");
  };
}

Contact.defaultProps = {
  ageSuffix: "",
};
