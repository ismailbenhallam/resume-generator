import Divider from "../divider/Divider";
import "./Details.css";
import Informations from "./informations/Informations";

export default function Details() {
  return (
    <div className="details">
      <Informations
        iconsStyle={{ color: "white", fontSize: "20px" }}
        color="yellow"
      />
      <Divider />
      <div className="languages">Langues</div>
      <Divider />
      <div className="assets">Atouts</div>
      <Divider />
      <div className="interests">Centres d'intérêt</div>
    </div>
  );
}
