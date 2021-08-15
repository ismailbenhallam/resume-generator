import { Fragment } from "react";
import SkillsService from "../../../services/skills-service";
import "./Skills.css";

const Skills = () => {
  const service = new SkillsService();
  const skills = service.getAll();
  return (
    <>
      <div className="section_title">Compétences</div>
      <div className="skills">
        {Object.entries(skills).map((entry) => {
          let key = entry[0];
          let values = entry[1];
          return (
            <Fragment key={key}>
              <div className="key">{key}</div>
              <div className="values">{values ? values.join(", ") : ""}</div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
