import { useTranslation } from "react-i18next";
import PrincipalSkillsService from "../../../../../../services/principal-skills-service";
import SectionTitle from "../../section-title/SectionTitle";
import "./Skills.css";

export default function Skills() {
  const { t } = useTranslation();
  const service = new PrincipalSkillsService();
  const principalSkills = service.getAll();
  return principalSkills.length ? (
    <div className="skills">
      <SectionTitle title={t("skills")} />
      <div className="skills-wrapper">
        {principalSkills.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}
