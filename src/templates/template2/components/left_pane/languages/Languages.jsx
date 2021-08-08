import languages from "../../../../../data/languages";
import SectionTitle from "../../section-title/SectionTitle";
import "./Languages.css";

export default function Languages() {
  return (
    <>
      <SectionTitle title="Langues" />
      <div className="languages">
        {Object.entries(languages).map((entry) => (
          <div className="language">
            <span>{entry[0]}</span>
            <span>{entry[1]}</span>
          </div>
        ))}
      </div>
    </>
  );
}
