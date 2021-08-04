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
import { PureComponent } from "react";
import informations from "../../../data/informations";
import "./Informations.css";

export default class Informations extends PureComponent {
  render() {
    return (
      <div className="informations">
        <FontAwesomeIcon icon={faEnvelope} style={this.props.iconsStyle} />
        <a
          href={"mailto:" + informations.email}
          target="_blank"
          rel="noreferrer"
          style={this.props.textStyle}>
          {informations.email}
        </a>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={this.props.iconsStyle} />
        <span style={this.props.textStyle}>{informations.address}</span>
        <FontAwesomeIcon icon={faBirthdayCake} style={this.props.iconsStyle} />
        <span style={this.props.textStyle}>
          {this.props.calculateAge
            ? this.calculateAge(informations.birthDate)
            : informations.birthDate}
        </span>
        <FontAwesomeIcon icon={faLinkedin} style={this.props.iconsStyle} />
        <a href={informations.linkedin} style={this.props.textStyle}>
          @{informations.linkedinUsername}
        </a>
        <FontAwesomeIcon icon={faGithub} style={this.props.iconsStyle} />
        <a
          href={informations.github}
          target="_blank"
          rel="noreferrer"
          style={this.props.textStyle}>
          @{informations.githubUsername}
        </a>
        <FontAwesomeIcon icon={faFlag} style={this.props.iconsStyle} />
        <span style={this.props.textStyle}>{informations.nationality}</span>
        <FontAwesomeIcon icon={faMobileAlt} style={this.props.iconsStyle} />
        <a
          href={"tel:" + informations.mobile}
          target="_blank"
          rel="noreferrer"
          style={this.props.textStyle}>
          {informations.mobile}
        </a>
        <FontAwesomeIcon
          icon={faInternetExplorer}
          style={this.props.iconsStyle}
        />
        <a
          href={informations.webSite}
          target="_blank"
          rel="noreferrer"
          style={this.props.textStyle}>
          {informations.webSite}
        </a>
      </div>
    );
  }

  calculateAge(birthDate) {
    var ageDifMs = Date.now() - new Date(birthDate).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return (
      Math.abs(ageDate.getUTCFullYear() - 1970) +
      " " +
      this.props.ageSuffix.trim()
    );
  }
}

Informations.defaultProps = {
  iconsStyle: { color: "white", fontSize: "18px" },
  textStyle: { color: "white" },
  ageSuffix: "",
};
