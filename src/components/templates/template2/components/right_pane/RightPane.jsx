import EducationService from "../../../../../services/education-service";
import ExperiencesService from "../../../../../services/experiences-service";
import Realizations from "./realizations/Realizations";
import "./RightPane.css";

export default function RightPane() {
  const educationService = new EducationService();
  const experiencesService = new ExperiencesService();
  return (
    <div className="right-pane">
      <Realizations
        title="experience"
        realizations={experiencesService.getAll()}
      />
      <Realizations
        title="formation"
        realizations={educationService.getAll()}
      />
    </div>
  );
}
