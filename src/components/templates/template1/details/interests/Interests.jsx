import { useTranslation } from "react-i18next";
import InterestsService from "../../../../../services/interests-service";
import Margin from "../../../../helpers/margin/Margin";
import Divider from "../../helpers/divider/Divider";
import DetailsSectionTitle from "../details_section_title/DetailsSectionTitle";
import "./Interests.css";

export default function Interests() {
  const { t } = useTranslation();
  let service = new InterestsService();
  let interests = service.getAll();
  let elements = interests.map((a) => <span key={a}>{a}</span>);
  return elements.length ? (
    <>
      <Divider />
      <DetailsSectionTitle title={t("interests")} />
      <Margin value="5px 15px">
        <div className="interests-wrapper">{elements}</div>
      </Margin>
    </>
  ) : (
    ""
  );
}
