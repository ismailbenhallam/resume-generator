import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import SkillsService from "../../../../services/skills-service";
import capitalize from "../../../../utilities/capitalize";
import Divider from "../helpers/divider/Divider";
import "./Skills.css";

const Skills = () => {
  const { t } = useTranslation();
  const service = new SkillsService();
  const skills = service.getAll();
  return (
    Object.entries(skills).length > 0 && (
      <>
        <Divider />
        <div className="section_title">{capitalize(t("skills"))}</div>
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
    )
  );
};

export default Skills;
