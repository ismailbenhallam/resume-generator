import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import CertificationsService from "../../../services/certifications-service.js";
import "./Certifications.css";

export default function Certifications() {
  const service = new CertificationsService();
  const certifications = service.getAll();
  return (
    <>
      <div className="section_title">Certifications</div>
      <div className="certifications">
        {certifications.map((certif) => {
          return (
            <Fragment key={certif.name}>
              {certif.url ? (
                <>
                  <a
                    href={certif.url}
                    target="_blank"
                    className="certification"
                    rel="noreferrer">
                    {certif.name}
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="icon"
                    />
                  </a>
                </>
              ) : (
                <span className="certification">{certif.name}</span>
              )}
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
