import education from "../../../../data/education";
import experiences from "../../../../data/experiences";
import Realizations from "./realizations/Realizations";
import "./RightPane.css";

export default function RightPane() {
  return (
    <div className="right-pane">
      <Realizations title="experience" realizations={experiences} />
      <Realizations title="formation" realizations={education} />
    </div>
  );
}
