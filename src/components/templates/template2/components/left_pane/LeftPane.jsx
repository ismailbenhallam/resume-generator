import { useTranslation } from "react-i18next";
import Certifications from "./certifications/Certifications";
import Contact from "./contact/Contact";
import Languages from "./languages/Languages";
import styles from "./LeftPane.module.css";
import Skills from "./skills/Skills";

export default function LeftPane() {
  const { t } = useTranslation();
  return (
    <div className={styles.leftPane}>
      <Contact shouldCalculateAge={true} ageSuffix={t("years old")} />
      <Skills />
      <Languages />
      <Certifications />
    </div>
  );
}
