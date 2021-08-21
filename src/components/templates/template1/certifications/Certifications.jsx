import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import CertificationsService from "../../../../services/certifications-service.js";
import capitalize from "../../../../utilities/capitalize.js";
import Divider from "../helpers/divider/Divider.jsx";
import "./Certifications.css";

export default function Certifications() {
  const { t } = useTranslation();
  const service = new CertificationsService();
  const certifications = service.getAll();
  return (
    certifications.length > 0 && (
      <>
        <Divider />
        <div className="section_title">{capitalize(t("certifications"))}</div>
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
    )
  );
}
