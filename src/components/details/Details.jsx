import Divider from "../divider/Divider";
import "./Details.css";

export default function Details() {
  return (
    <div className="details">
      <div className="informations">Informations</div>
      <Divider />
      <div className="languages">Langues</div>
      <Divider />
      <div className="assets">Atouts</div>
      <Divider />
      <div className="interests">Centres d'intérêt</div>
    </div>
  );
}
