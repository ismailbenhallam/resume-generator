import ExperiencesService from "../../../../services/experiences-service";
import Realizations from "../Realizations";

export default function Experiences() {
  let service = new ExperiencesService();
  return (
    <Realizations
      realizations={service.getAll()}
      title="Expériences professionnelles et projets réalisés"
    />
  );
}
