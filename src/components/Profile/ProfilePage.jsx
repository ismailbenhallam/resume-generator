import { useState } from "react";
import { useTranslation } from "react-i18next";
import capitalize from "../../utilities/capitalize";
import Assets from "./assets/Assets";
import Certifications from "./certifications/Certifications";
import Coordinates from "./coordinates/Coordinates";
import Education from "./education/Education";
import Experiences from "./experiences/Experiences";
import Interests from "./interests/Interests";
import Languages from "./languages/Languages";
import PrincipalSkillss from "./principal-skills/PrincipalSkills";
import styles from "./ProfilePage.module.css";
import Skills from "./skills/Skills";

export default function ProfilePage() {
  const { t } = useTranslation();
  const keyElements = [
    "coordinates",
    "languages",
    "assets",
    "interests",
    "experiences",
    "education",
    "skills",
    "principal skills",
    "certifications",
  ];

  let elements = keyElements.map((el) => t(el));

  const [selectedKey, setSelectedKey] = useState(keyElements[0]);

  const handleLiClick = (event) => {
    event.preventDefault();
    setSelectedKey(event.target.dataset["key"]);
  };

  return (
    <div className={styles.profilePage}>
      <h1 className={styles.h1}>{t("My Profile")}</h1>
      <div className={styles.grid}>
        <div className={styles.informationsTab}>
          <ul>
            {keyElements.map((key, index) =>
              selectedKey === key ? (
                <li
                  key={key}
                  onClick={handleLiClick}
                  data-key={key}
                  className={styles.active}>
                  {capitalize(elements[index])}
                </li>
              ) : (
                <li key={key} onClick={handleLiClick} data-key={key}>
                  {capitalize(elements[index])}
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.activeTab}>
          {selectedKey === "coordinates" && <Coordinates />}
          {selectedKey === "languages" && <Languages />}
          {selectedKey === "assets" && <Assets />}
          {selectedKey === "interests" && <Interests />}
          {selectedKey === "experiences" && <Experiences />}
          {selectedKey === "education" && <Education />}
          {selectedKey === "skills" && <Skills />}
          {selectedKey === "principal skills" && <PrincipalSkillss />}
          {selectedKey === "certifications" && <Certifications />}
        </div>
      </div>
    </div>
  );
}
