import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import SkillsService from "../../../../services/skills-service";
import Divider from "../helpers/divider/Divider";
import SectionTitle from "../section_title/SectionTitle";
import styles from "./Skills.module.css";

const Skills = () => {
  const { t } = useTranslation();
  const service = new SkillsService();
  const skills = service.getAll();
  return (
    Object.entries(skills).length > 0 && (
      <>
        <Divider />
        <SectionTitle title={t("skills")} />
        <div className={styles.skills}>
          {Object.entries(skills).map((entry) => {
            let key = entry[0];
            let values = entry[1];
            return (
              <Fragment key={key}>
                <div className={styles.key}>{key}</div>
                <div>{values ? values.join(", ") : ""}</div>
              </Fragment>
            );
          })}
        </div>
      </>
    )
  );
};

export default Skills;
