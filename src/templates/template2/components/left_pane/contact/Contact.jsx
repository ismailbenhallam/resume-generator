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
import CoordinatesService from "../../../../../services/coordinates";
import "./Contact.css";

export default class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.service = new CoordinatesService();
    this.informations = this.service.getAll();
  }
  render() {
    return (
      <div className="contact">
        <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
        <a href={"tel:" + this.informations.mobile}>
          {this.informations.mobile}
        </a>
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        <span>{this.informations.email}</span>
        <FontAwesomeIcon className="icon" icon={faBirthdayCake} />
        <span>
          {this.props.calculateAge
            ? this.calculateAge(this.informations.birthDate)
            : this.formatBirthDate(this.informations.birthDate)}
        </span>
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <a href={this.informations.linkedin}>
          @{this.informations.linkedinUsername}
        </a>
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <a href={this.informations.github} target="_blank" rel="noreferrer">
          @{this.informations.githubUsername}
        </a>
        <FontAwesomeIcon className="icon" icon={faInternetExplorer} />
        <a href={this.informations.website} target="_blank" rel="noreferrer">
          {this.informations.website}
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
      .toLocaleDateString(this.informations.language, {
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
