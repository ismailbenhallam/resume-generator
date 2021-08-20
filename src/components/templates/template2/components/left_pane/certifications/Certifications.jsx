import CertificationsService from "../../../../../../services/certifications-service";
import SectionTitle from "../../section-title/SectionTitle";
import "./Certifications.css";

export default function Certifications() {
  const service = new CertificationsService();
  const certifications = service.getAll();
  return (
    <>
      <SectionTitle title="Certifications" />
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
  );
}
