import { useState } from "react";
import { useTranslation } from "react-i18next";
import useRequiredFieldsToast from "../../../hooks/useRequiredFieldsToast";
import useToast from "../../../hooks/useToast";
import SkillsService from "../../../services/skills-service";
import capitalize from "../../../utilities/capitalize";
import "./Skills.css";

export default function Skills() {
  const { t } = useTranslation();
  const [removeWaitingToast, removeSuccessToast] = useToast("item deleted");
  const [addWaitingToast, addSuccessToast] = useToast("item saved");
  const warnToast = useRequiredFieldsToast();

  const service = new SkillsService();
  const [inputs, setInputs] = useState({
    title: "",
    details: "",
  });
  const [skills, setSkills] = useState(service.getAll());

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const removeSkill = (skill) => {
    removeWaitingToast();
    service.removeOne(skill);
    setSkills(service.getAll());
    removeSuccessToast();
  };

  const addSkill = (event) => {
    event.preventDefault();
    if (!inputs.title.trim()) {
      warnToast();
      return;
    }
    addWaitingToast();
    let details = "";
    if (inputs.details.trim()) {
      details = inputs.details.split(",");
      details = details.map((d) => capitalize(d.trim()));
    }

    service.addOne({
      [inputs.title]: details,
    });
    setInputs({
      title: "",
      details: "",
    });

    setSkills(service.getAll());
    addSuccessToast();
  };

  return (
    <div className="skills">
      {Object.entries(skills).length > 0 && (
        <div className="skills-list">
          {Object.entries(skills).map((l) => (
            <div key={l[0]} className="skill">
              <span>{l[0]}</span>
              <span>{l[1] ? l[1].join(", ") : ""}</span>
              <button onClick={() => removeSkill(l[0])} className="remove-btn">
                X
              </button>
            </div>
          ))}
        </div>
      )}
      <form>
        <div className="skills-input-wrapper">
          <div className="skills-input">
            <label htmlFor="input-new-skill">{capitalize(t("skill"))}*</label>
            <input
              id="input-new-skill"
              name="title"
              type="text"
              onChange={handleChange}
              value={inputs.title}
              required="required"
            />
            <label htmlFor="input-new-skill-level">
              {capitalize(t("details")) +
                " (" +
                t("comma separated values") +
                ")"}
            </label>
            <input
              id="input-new-skill-level"
              name="details"
              type="text"
              onChange={handleChange}
              value={inputs.details}
            />
          </div>
          <button onClick={addSkill} className="add-btn">
            {capitalize(t("add"))}
          </button>
        </div>
      </form>
    </div>
  );
}
