import EducationService from "../../../../services/education-service";
import Realizations from "../Realizations";

export default function Education() {
  let service = new EducationService();
  return (
    <Realizations
      realizations={service.getAll()}
      title="Diplômes et Formations"
    />
  );
}
