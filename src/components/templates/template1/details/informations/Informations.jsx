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
import Margin from "../../helpers/margin/Margin";
import styles from "./Informations.module.css";

export default function Informations(props) {
  const {
    iconsStyle = { color: "white", fontSize: "18px" },
    textStyle = { color: "white" },
    ageSuffix = "",
    shouldCalculateAge = true,
  } = props;
  const service = new CoordinatesService();
  const informations = service.getAll();
  const {
    email,
    address,
    birthDate,
    linkedin,
    github,
    nationality,
    mobile,
    website,
  } = informations;

  return Object.entries(informations).filter((entry) => {
    return (
      (entry[0] === "email" && entry[1]) ||
      (entry[0] === "address" && entry[1]) ||
      (entry[0] === "birthDate" && entry[1]) ||
      (entry[0] === "linkedin" && entry[1]) ||
      (entry[0] === "github" && entry[1]) ||
      (entry[0] === "nationality" && entry[1]) ||
      (entry[0] === "mobile" && entry[1]) ||
      (entry[0] === "website" && entry[1])
    );
  }).length === 0 ? (
    <></>
  ) : (
    <>
      <Margin value="10px 2px">
        <div className={styles.informations}>
          {email && (
            <>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faEnvelope}
                style={iconsStyle}
              />
              <a
                href={"mailto:" + email}
                target="_blank"
                rel="noreferrer"
                style={textStyle}>
                {email}
              </a>
            </>
          )}
          {address && (
            <>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faMapMarkerAlt}
                style={iconsStyle}
              />
              <span style={textStyle}>{address}</span>
            </>
          )}
          {birthDate && (
            <>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faBirthdayCake}
                style={iconsStyle}
              />
              <span style={textStyle}>
                {shouldCalculateAge
                  ? calculateAge(birthDate, ageSuffix)
                  : birthDate}
              </span>
            </>
          )}
          {linkedin && (
            <>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faLinkedin}
                style={iconsStyle}
              />
              <a href={linkedin} style={textStyle}>
                @{getUsernameFromNetworkUrl(linkedin)}
              </a>
            </>
          )}
          {github && (
            <>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faGithub}
                style={iconsStyle}
              />
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                style={textStyle}>
                @{getUsernameFromNetworkUrl(github)}
              </a>
            </>
          )}
          {nationality && (
            <>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faFlag}
                style={iconsStyle}
              />
              <span style={textStyle}>{nationality}</span>
            </>
          )}
          {mobile && (
            <>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faMobileAlt}
                style={iconsStyle}
              />
              <a
                href={"tel:" + mobile}
                target="_blank"
                rel="noreferrer"
                style={textStyle}>
                {mobile}
              </a>
            </>
          )}
          {website && (
            <>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faInternetExplorer}
                style={iconsStyle}
              />
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                style={textStyle}>
                {website}
              </a>
            </>
          )}
        </div>
      </Margin>
    </>
  );
}

Informations.propTypes = {
  iconsStyle: PropTypes.object,
  textStyle: PropTypes.object,
  ageSuffix: PropTypes.string,
  shouldCalculateAge: PropTypes.bool,
};
