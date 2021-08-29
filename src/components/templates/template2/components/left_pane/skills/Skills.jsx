import { useTranslation } from "react-i18next";
import PrincipalSkillsService from "../../../../../../services/principal-skills-service";
import SectionTitle from "../../section-title/SectionTitle";
import styles from "./Skills.module.css";

export default function Skills() {
  const { t } = useTranslation();
  const service = new PrincipalSkillsService();
  const principalSkills = service.getAll();
  return principalSkills.length ? (
    <div>
      <SectionTitle title={t("skills")} />
      <div className={styles.wrapper}>
        {principalSkills.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}
