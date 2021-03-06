import {
  faGithub,
  faInternetExplorer,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBirthdayCake,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CoordinatesService from "../../../../../../services/coordinates";
import calculateAge from "../../../../../../utilities/calclulateAgeFromStringDate";
import getUsernameFromNetworkUrl from "../../../../../../utilities/getUsernameFromNetworkUrl.js";
import styles from "./Contact.module.css";

export default function Contact({ shouldCalculateAge, ageSuffix }) {
  const service = new CoordinatesService();
  const {
    language,
    mobile,
    email,
    birthDate,
    linkedin,
    github,
    website,
    address,
  } = service.getAll();

  const formatBirthDate = (birthDate) => {
    const d = new Date(birthDate);
    return d
      .toLocaleDateString(language, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .split(" ")
      .join(" ");
  };

  return (
    <div className={styles.contact}>
      {mobile && (
        <>
          <FontAwesomeIcon className={styles.icon} icon={faPhoneAlt} />
          <a href={"tel:" + mobile} target="_blank" rel="noreferrer">
            {mobile}
          </a>
        </>
      )}
      {address && (
        <>
          <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
          <span>{address}</span>
        </>
      )}
      {email && (
        <>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          <a href={"mailto:" + email} target="_blank" rel="noreferrer">
            {email}
          </a>
        </>
      )}
      {birthDate && (
        <>
          <FontAwesomeIcon className={styles.icon} icon={faBirthdayCake} />
          <span>
            {shouldCalculateAge
              ? calculateAge(birthDate, ageSuffix)
              : formatBirthDate(birthDate)}
          </span>
        </>
      )}
      {linkedin && (
        <>
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          <a href={linkedin} target="_blank" rel="noreferrer">
            @{getUsernameFromNetworkUrl(linkedin)}
          </a>
        </>
      )}
      {github && (
        <>
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          <a href={github} target="_blank" rel="noreferrer">
            @{getUsernameFromNetworkUrl(github)}
          </a>
        </>
      )}
      {website && (
        <>
          <FontAwesomeIcon className={styles.icon} icon={faInternetExplorer} />
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </>
      )}
    </div>
  );
}
