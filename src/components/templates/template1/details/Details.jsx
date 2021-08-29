import { useTranslation } from "react-i18next";
import Assets from "./assets/Assets";
import styles from "./Details.module.css";
import Informations from "./informations/Informations";
import Interests from "./interests/Interests";
import Languages from "./languages/Languages";

export default function Details() {
  const { t } = useTranslation();
  return (
    <div className={styles.details}>
      <Informations shouldCalculateAge={true} ageSuffix={t("years old")} />
      <Languages />
      <Assets />
      <Interests />
    </div>
  );
}
