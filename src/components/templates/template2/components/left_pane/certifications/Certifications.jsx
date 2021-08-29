import { useTranslation } from "react-i18next";
import CertificationsService from "../../../../../../services/certifications-service";
import capitalize from "../../../../../../utilities/capitalize";
import SectionTitle from "../../section-title/SectionTitle";
import styles from "./Certifications.module.css";

export default function Certifications() {
  const { t } = useTranslation();
  const service = new CertificationsService();
  const certifications = service.getAll();
  return certifications.length ? (
    <>
      <SectionTitle title={capitalize(t("certifications"))} />
      <div className={styles.certifications}>
        {certifications.map((certif) => (
          <div key={certif.name} className={styles.certification}>
            {certif.url ? (
              <a href={certif.url}>{certif.name}</a>
            ) : (
              <span>{certif.name}</span>
            )}
            {certif.organization && <span>{certif.organization}</span>}
          </div>
        ))}
      </div>
    </>
  ) : (
    ""
  );
}
