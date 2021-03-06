import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import LanguagesService from "../../../../../services/languages-service";
import Divider from "../../helpers/divider/Divider";
import Margin from "../../helpers/margin/Margin";
import DetailsSectionTitle from "../details_section_title/DetailsSectionTitle";
import styles from "./Languages.module.css";

export default function Languages() {
  const { t } = useTranslation();
  const service = new LanguagesService();
  const languages = service.getAll();
  let elements = Object.entries(languages).map((entry) => (
    <Fragment key={entry[0]}>
      <span>{entry[0]}</span>
      <span>{entry[1]}</span>
    </Fragment>
  ));

  return elements.length ? (
    <>
      <Divider />
      <DetailsSectionTitle title={t("languages")} />
      <Margin value="5px 5px">
        <div className={styles.grid}>{elements}</div>
      </Margin>
    </>
  ) : (
    ""
  );
}
