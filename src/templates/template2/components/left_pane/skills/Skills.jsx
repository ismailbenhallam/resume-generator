import principalSkills from "../../../../../data/principal-skills";
import SectionTitle from "../../section-title/SectionTitle";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <SectionTitle title="Competences" />
      <div className="skills-wrapper">
        {principalSkills.map((s) => (
          <span>{s}</span>
        ))}
      </div>
    </div>
  );
}
