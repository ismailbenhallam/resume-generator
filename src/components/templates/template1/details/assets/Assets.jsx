import AssetsService from "../../../../../services/assets-service";
import "./Assets.css";

export default function Assets() {
  const service = new AssetsService();
  let assets = service.getAll();
  let elements = assets.map((a) => <span key={a}>{a}</span>);
  return <div className="assets-wrapper">{elements}</div>;
}
