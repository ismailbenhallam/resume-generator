import { useState } from "react";
import { useTranslation } from "react-i18next";
import PrincipalSkillsService from "../../../services/principal-skills-service";
import capitalize from "../../../utilities/capitalize";
import "./PrincipalSkills.css";

export default function PrincipalSkillss() {
  const { t } = useTranslation();
  const service = new PrincipalSkillsService();
  const [value, setValue] = useState("");
  const [principalSkills, setPrincipalSkills] = useState(service.getAll());

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const removePrincipalSkills = (skill) => {
    service.removeOne(skill);
    setPrincipalSkills(service.getAll());
  };

  const addPrincipalSkills = (event) => {
    event.preventDefault();
    if (!value) return;
    service.addOne(value);

    setPrincipalSkills(service.getAll());
    setValue("");
  };

  return (
    <div className="principalSkills">
      {principalSkills.length > 0 && (
        <div className="principalSkills-list">
          {principalSkills.map((skill) => (
            <div key={skill} className="principalSkill">
              <span>{skill}</span>
              <button
                onClick={() => removePrincipalSkills(skill)}
                className="remove-btn">
                X
              </button>
            </div>
          ))}
        </div>
      )}
      <form className="principalSkills-input-wrapper">
        <div className="principalSkills-input">
          <label htmlFor="input-new-principalSkills">
            {capitalize(t("principal skill"))}
          </label>
          <input
            id="input-new-principalSkills"
            name="value"
            type="text"
            onChange={handleChange}
            value={value}
            required="required"
          />
        </div>
        <button onClick={addPrincipalSkills} className="add-btn">
          {capitalize(t("add"))}
        </button>
      </form>
    </div>
  );
}
