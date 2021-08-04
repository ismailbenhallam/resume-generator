import Divider from "../divider/Divider";
import Margin from "../helpers/Margin";
import Assets from "./assets/Assets";
import "./Details.css";
import Informations from "./informations/Informations";
import Interests from "./interests/Interests";
import Languages from "./languages/Languages";
import SectionTitle from "./section_title/SectionTitle";

export default function Details() {
  return (
    <div className="details">
      <Margin value="10px 20px">
        <Informations calculateAge="true" ageSuffix="ans" />
      </Margin>
      <Divider />
      <SectionTitle title="Langues" />
      <Margin value="10px 35px">
        <Languages />
      </Margin>
      <Divider />
      <SectionTitle title="Atouts" />
      <Margin value="10px 35px">
        <Assets />
      </Margin>
      <Divider />
      <SectionTitle title="Centres d'intérêt" />
      <Margin value="10px 35px">
        <Interests />
      </Margin>
    </div>
  );
}
