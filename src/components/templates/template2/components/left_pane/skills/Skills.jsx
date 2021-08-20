import PrincipalSkillsService from "../../../../../../services/principal-skills-service";
import SectionTitle from "../../section-title/SectionTitle";
import "./Skills.css";

export default function Skills() {
  const service = new PrincipalSkillsService();
  const principalSkills = service.getAll();
  return (
    <div className="skills">
      <SectionTitle title="Competences" />
      <div className="skills-wrapper">
        {principalSkills.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}
