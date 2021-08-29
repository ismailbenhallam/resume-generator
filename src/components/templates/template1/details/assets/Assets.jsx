import { useTranslation } from "react-i18next";
import AssetsService from "../../../../../services/assets-service";
import Divider from "../../helpers/divider/Divider";
import Margin from "../../helpers/margin/Margin";
import DetailsSectionTitle from "../details_section_title/DetailsSectionTitle";
import styles from "./Assets.module.css";

export default function Assets() {
  const { t } = useTranslation();
  const service = new AssetsService();
  let assets = service.getAll();
  let elements = assets.map((a) => <span key={a}>{a}</span>);

  return elements.length ? (
    <>
      <Divider />
      <DetailsSectionTitle title={t("assets")} />
      <Margin value="5px 15px">
        <div className={styles.assetsWrapper}>{elements}</div>
      </Margin>
    </>
  ) : (
    ""
  );
}
