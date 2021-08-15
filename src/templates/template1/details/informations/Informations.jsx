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
import CoordinatesService from "../../../../services/coordinates";
import "./Informations.css";

export default class Informations extends PureComponent {
  constructor(props) {
    super(props);
    this.service = new CoordinatesService();
    this.informations = this.service.getAll();
  }

  render() {
    return (
      <div className="informations">
        <FontAwesomeIcon
          className="icon"
          icon={faEnvelope}
          style={this.props.iconsStyle}
        />
        <a
          href={"mailto:" + this.informations.email}
          target="_blank"
          rel="noreferrer"
          style={this.props.textStyle}>
          {this.informations.email}
        </a>
        <FontAwesomeIcon
          className="icon"
          icon={faMapMarkerAlt}
          style={this.props.iconsStyle}
        />
        <span style={this.props.textStyle}>{this.informations.address}</span>
        <FontAwesomeIcon
          className="icon"
          icon={faBirthdayCake}
          style={this.props.iconsStyle}
        />
        <span style={this.props.textStyle}>
          {this.props.calculateAge
            ? this.calculateAge(this.informations.birthDate)
            : this.informations.birthDate}
        </span>
        <FontAwesomeIcon
          className="icon"
          icon={faLinkedin}
          style={this.props.iconsStyle}
        />
        <a href={this.informations.linkedin} style={this.props.textStyle}>
          @{this.informations.linkedinUsername}
        </a>
        <FontAwesomeIcon
          className="icon"
          icon={faGithub}
          style={this.props.iconsStyle}
        />
        <a
          href={this.informations.github}
          target="_blank"
          rel="noreferrer"
          style={this.props.textStyle}>
          @{this.informations.githubUsername}
        </a>
        <FontAwesomeIcon
          className="icon"
          icon={faFlag}
          style={this.props.iconsStyle}
        />
        <span style={this.props.textStyle}>
          {this.informations.nationality}
        </span>
        <FontAwesomeIcon
          className="icon"
          icon={faMobileAlt}
          style={this.props.iconsStyle}
        />
        <a
          href={"tel:" + this.informations.mobile}
          target="_blank"
          rel="noreferrer"
          style={this.props.textStyle}>
          {this.informations.mobile}
        </a>
        <FontAwesomeIcon
          className="icon"
          icon={faInternetExplorer}
          style={this.props.iconsStyle}
        />
        <a
          href={this.informations.website}
          target="_blank"
          rel="noreferrer"
          style={this.props.textStyle}>
          {this.informations.website}
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
