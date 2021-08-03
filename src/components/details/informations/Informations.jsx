import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBirthdayCake,
  faEnvelope,
  faFlag,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import informations from "../../../data/informations";
import "./informations.css";

export default class Informations extends Component {
  render() {
    return (
      <div className="informations">
        <h3>Informations</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={this.props.iconsColor}
                />
              </td>
              <td>
                <a
                  href={"mailto:" + informations.email}
                  target="_blank"
                  rel="noreferrer">
                  {informations.email}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color={this.props.iconsColor}
                />
              </td>
              <td>{informations.address}</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faBirthdayCake}
                  color={this.props.iconsColor}
                />
              </td>
              <td>{informations.birthDate}</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color={this.props.iconsColor}
                />
              </td>
              <td>
                <a href={informations.linkedin}>
                  @{informations.linkedinUsername}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faGithub}
                  color={this.props.iconsColor}
                />
              </td>
              <td>
                <a href={informations.github} target="_blank" rel="noreferrer">
                  @{informations.githubUsername}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faFlag} color={this.props.iconsColor} />
              </td>
              <td>{informations.nationality}</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  color={this.props.iconsColor}
                />
              </td>
              <td>
                <a
                  href={"tel:" + informations.mobile}
                  target="_blank"
                  rel="noreferrer">
                  {informations.mobile}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Informations.defaultProps = {
  iconsColor: "red",
};
