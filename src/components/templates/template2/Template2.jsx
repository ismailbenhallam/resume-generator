import LeftPane from "./components/left_pane/LeftPane";
import NameAndTitle from "./components/name_and_title/NameAndTitle";
import Photo from "./components/photo/Photo";
import RightPane from "./components/right_pane/RightPane";
import "./Template2.css";

export default function Template2() {
  return (
    <div className="template2 grid">
      <Photo />
      <NameAndTitle />
      <LeftPane />
      <RightPane />
    </div>
  );
}
