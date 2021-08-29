import { useState } from "react";
import { useTranslation } from "react-i18next";
import useRequiredFieldsToast from "../../../hooks/useRequiredFieldsToast";
import useToast from "../../../hooks/useToast";
import SkillsService from "../../../services/skills-service";
import capitalize from "../../../utilities/capitalize";
import styles from "./Skills.module.css";

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
    <div className={styles.skills}>
      {Object.entries(skills).length > 0 && (
        <div className={styles.skillsList}>
          {Object.entries(skills).map((l) => (
            <div key={l[0]} className={styles.skill}>
              <span>{l[0]}</span>
              <span>
                {l[1] ? (Array.isArray(l[1]) ? l[1].join(", ") : l[1]) : ""}
              </span>
              <button
                onClick={() => removeSkill(l[0])}
                className={styles.removeBtn}>
                X
              </button>
            </div>
          ))}
        </div>
      )}
      <form>
        <div className={styles.inputWrapper}>
          <div className={styles.input}>
            <label htmlFor={styles.inputNewSkill}>
              {capitalize(t("skill"))}*
            </label>
            <input
              id={styles.inputNewSkill}
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
          <button onClick={addSkill} className={styles.addBtn}>
            {capitalize(t("add"))}
          </button>
        </div>
      </form>
    </div>
  );
}
