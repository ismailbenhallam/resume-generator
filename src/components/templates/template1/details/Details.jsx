import Assets from "./assets/Assets";
import "./Details.css";
import Informations from "./informations/Informations";
import Interests from "./interests/Interests";
import Languages from "./languages/Languages";

export default function Details() {
  return (
    <div className="Details">
      <Informations shouldCalculateAge={true} ageSuffix="ans" />
      <Languages />
      <Assets />
      <Interests />
    </div>
  );
}
