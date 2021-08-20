import ExperiencesService from "../../../../../services/experiences-service";
import Realizations from "../Realizations";

export default function Experiences() {
  let service = new ExperiencesService();
  const experiences = service.getAll();
  return (
    experiences.length > 0 && (
      <>
        <Realizations
          realizations={service.getAll()}
          title="Expériences professionnelles et projets réalisés"
        />
      </>
    )
  );
}
