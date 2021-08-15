import certifications from "../../../../../data/certifications";
import SectionTitle from "../../section-title/SectionTitle";
import "./Certifications.css";

export default function Certifications() {
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
            {certif.organisation && <span>{certif.organisation}</span>}
          </div>
        ))}
      </div>
    </>
  );
}
