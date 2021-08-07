import Divider from "../helpers/divider/Divider";
import Margin from "../helpers/margin/Margin";
import Assets from "./assets/Assets";
import "./Details.css";
import DetailsSectionTitle from "./details_section_title/DetailsSectionTitle";
import Informations from "./informations/Informations";
import Interests from "./interests/Interests";
import Languages from "./languages/Languages";

export default function Details() {
  return (
    <div className="Details">
      <Margin value="10px 2px">
        <Informations calculateAge="true" ageSuffix="ans" />
      </Margin>
      <Divider />
      <DetailsSectionTitle title="Langues" />
      <Margin value="5px 5px">
        <Languages />
      </Margin>
      <Divider />
      <DetailsSectionTitle title="Atouts" />
      <Margin value="5px 15px">
        <Assets />
      </Margin>
      <Divider />
      <DetailsSectionTitle title="Centres d'intérêt" />
      <Margin value="5px 15px">
        <Interests />
      </Margin>
    </div>
  );
}
