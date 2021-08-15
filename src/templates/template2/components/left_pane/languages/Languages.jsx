import LanguagesService from "../../../../../services/languages-service";
import SectionTitle from "../../section-title/SectionTitle";
import "./Languages.css";

export default function Languages() {
  const service = new LanguagesService();
  let languages = service.getAll();
  return (
    <>
      <SectionTitle title="Langues" />
      <div className="languages">
        {Object.entries(languages).map((entry) => (
          <div key={entry[0]} className="language">
            <span>{entry[0]}</span>
            <span>{entry[1]}</span>
          </div>
        ))}
      </div>
    </>
  );
}
