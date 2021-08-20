import AssetsService from "../../../../../services/assets-service";
import Divider from "../../helpers/divider/Divider";
import Margin from "../../helpers/margin/Margin";
import DetailsSectionTitle from "../details_section_title/DetailsSectionTitle";
import "./Assets.css";

export default function Assets() {
  const service = new AssetsService();
  let assets = service.getAll();
  let elements = assets.map((a) => <span key={a}>{a}</span>);
  return elements.length ? (
    <>
      <Divider />
      <DetailsSectionTitle title="Atouts" />
      <Margin value="5px 15px">
        <div className="assets-wrapper">{elements}</div>
      </Margin>
    </>
  ) : (
    ""
  );
}
