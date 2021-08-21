import { useTranslation } from "react-i18next";
import ExperiencesService from "../../../../../services/experiences-service";
import Realizations from "../Realizations";

export default function Experiences() {
  const { t } = useTranslation();
  let service = new ExperiencesService();
  const experiences = service.getAll();
  return (
    experiences.length > 0 && (
      <>
        <Realizations
          realizations={service.getAll()}
          title={t("professional experiences and completed projects")}
        />
      </>
    )
  );
}
