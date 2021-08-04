import experiences from "../../../data/experiences";
import Realisations from "../Realisations";

export default function Experiences() {
  return (
    <Realisations
      realisations={experiences}
      title="Expériences professionnelles et projets réalisés"
    />
  );
}
