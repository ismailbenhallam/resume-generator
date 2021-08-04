import skills from "../../data/skills.js";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="section_title">Compétences</div>
      <div className="skills">
        {Object.entries(skills).map((entry) => {
          let key = entry[0];
          let values = entry[1];
          return (
            <>
              <div className="key">{key}</div>
              <div className="values">{values.join(", ")}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
