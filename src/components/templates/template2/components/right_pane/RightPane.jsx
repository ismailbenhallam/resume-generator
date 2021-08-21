import { useTranslation } from "react-i18next";
import EducationService from "../../../../../services/education-service";
import ExperiencesService from "../../../../../services/experiences-service";
import Realizations from "./realizations/Realizations";
import "./RightPane.css";

export default function RightPane() {
  const { t } = useTranslation();
  const educationService = new EducationService();
  const experiencesService = new ExperiencesService();
  return (
    <div className="right-pane">
      <Realizations
        title={t("experience")}
        realizations={experiencesService.getAll()}
      />
      <Realizations
        title={t("formation")}
        realizations={educationService.getAll()}
      />
    </div>
  );
}
