import InterestsService from "../../../../services/interests-service";
import "./Interests.css";

export default function Interests() {
  let service = new InterestsService();
  let interests = service.getAll();
  let elements = interests.map((a) => <span key={a}>{a}</span>);
  return <div className="interests-wrapper">{elements}</div>;
}
