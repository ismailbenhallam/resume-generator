import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import CertificationsService from "../../../../services/certifications-service.js";
import Divider from "../helpers/divider/Divider.jsx";
import SectionTitle from "../section_title/SectionTitle.jsx";
import styles from "./Certifications.module.css";

export default function Certifications() {
  const service = new CertificationsService();
  const { t } = useTranslation();
  const certifications = service.getAll();
  return (
    certifications.length > 0 && (
      <>
        <Divider />
        <SectionTitle title={t("certifications")}></SectionTitle>
        <div className={styles.certifications}>
          {certifications.map((certif) => {
            return (
              <Fragment key={certif.name}>
                {certif.url ? (
                  <>
                    <a
                      href={certif.url}
                      target="_blank"
                      className={styles.certification}
                      rel="noreferrer">
                      {certif.name}
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className={styles.icon}
                      />
                    </a>
                  </>
                ) : (
                  <span className={styles.certification}>{certif.name}</span>
                )}
              </Fragment>
            );
          })}
        </div>
      </>
    )
  );
}
