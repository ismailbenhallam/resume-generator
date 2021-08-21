import { useTranslation } from "react-i18next";
import CertificationsService from "../../../../../../services/certifications-service";
import capitalize from "../../../../../../utilities/capitalize";
import SectionTitle from "../../section-title/SectionTitle";
import "./Certifications.css";

export default function Certifications() {
  const { t } = useTranslation();
  const service = new CertificationsService();
  const certifications = service.getAll();
  return Object.entries(certifications).length ? (
    <>
      <SectionTitle title={capitalize(t("certifications"))} />
      <div className="certifications">
        {certifications.map((certif) => (
          <div key={certif.name} className="certification">
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
