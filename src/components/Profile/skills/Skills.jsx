import { useState } from "react";
import SkillsService from "../../../services/skills-service";
import capitalize from "../../../utilities/capitalize";
import "./Skills.css";

export default function Skills() {
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
    service.removeOne(skill);
    setSkills(service.getAll());
  };

  const addSkill = (event) => {
    event.preventDefault();
    if (!inputs.title.trim()) return;

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
            <label htmlFor="input-new-skill">Skill*</label>
            <input
              id="input-new-skill"
              name="title"
              type="text"
              onChange={handleChange}
              value={inputs.title}
              required="required"
            />
            <label htmlFor="input-new-skill-level">
              Details (comma separated)
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
