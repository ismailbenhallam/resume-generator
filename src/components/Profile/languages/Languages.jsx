import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguagesService from "../../../services/languages-service";
import capitalize from "../../../utilities/capitalize";
import "./Languages.css";

export default function Languages() {
  const { t } = useTranslation();
  const service = new LanguagesService();
  const [languages, setLanguages] = useState(service.getAll());
  const [inputs, setInputs] = useState({
    language: "",
    level: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const removeLanguage = (name) => {
    service.removeOne(name);
    setLanguages(service.getAll());
  };

  const addLanguage = (event) => {
    event.preventDefault();
    if (!inputs.language.trim() || !inputs.level.trim()) return;

    service.addOne({
      [inputs.language.trim()]: inputs.level.trim(),
    });
    setLanguages(service.getAll());

    setInputs({
      language: "",
      level: "",
    });
  };

  return (
    <div className="languages">
      {Object.entries(languages).length > 0 && (
        <div className="langagues-list">
          {Object.entries(languages).map((l) => (
            <div key={l[0]} className="langague">
              <span>{l[0]}</span>
              <span>{l[1]}</span>
              <button
                onClick={() => removeLanguage(l[0])}
                className="remove-btn">
                X
              </button>
            </div>
          ))}
        </div>
      )}
      <form>
        <div className="langagues-input-wrapper">
          <div className="languages-input">
            <label htmlFor="input-new-language">
              {capitalize(t("language"))}*
            </label>
            <input
              id="input-new-language"
              name="language"
              type="text"
              onChange={handleChange}
              value={inputs.language}
              required="required"
            />
            <label htmlFor="input-new-language-level">
              {capitalize(t("level"))}*
            </label>
            <input
              id="input-new-language-level"
              name="level"
              type="text"
              onChange={handleChange}
              value={inputs.level}
              required="required"
            />
          </div>
          <button onClick={addLanguage} className="add-btn">
            {capitalize(t("add"))}
          </button>
        </div>
      </form>
    </div>
  );
}
