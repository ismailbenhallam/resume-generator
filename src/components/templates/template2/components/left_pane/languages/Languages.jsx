import { useTranslation } from "react-i18next";
import LanguagesService from "../../../../../../services/languages-service";
import SectionTitle from "../../section-title/SectionTitle";
import "./Languages.css";

export default function Languages() {
  const { t } = useTranslation();
  const service = new LanguagesService();
  let languages = service.getAll();
  return Object.keys(languages).length ? (
    <>
      <SectionTitle title={t("languages")} />
      <div className="languages">
        {Object.entries(languages).map((entry) => (
          <div key={entry[0]} className="language">
            <span>{entry[0]}</span>
            <span>{entry[1]}</span>
          </div>
        ))}
      </div>
    </>
  ) : (
    ""
  );
}
