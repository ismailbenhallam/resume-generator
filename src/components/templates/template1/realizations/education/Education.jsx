import { useTranslation } from "react-i18next";
import EducationService from "../../../../../services/education-service";
import Divider from "../../helpers/divider/Divider";
import Realizations from "../Realizations";

export default function Education() {
  const { t } = useTranslation();
  const service = new EducationService();
  const education = service.getAll();
  return (
    education.length > 0 && (
      <>
        <Divider />
        <Realizations
          realizations={service.getAll()}
          title={t("diplomas and qualifications")}
        />
      </>
    )
  );
}
