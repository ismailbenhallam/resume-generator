import LeftPane from "./components/left_pane/LeftPane";
import NameAndTitle from "./components/name_and_title/NameAndTitle";
import Photo from "./components/photo/Photo";
import RightPane from "./components/right_pane/RightPane";
import styles from "./Template2.module.css";

export default function Template2() {
  return (
    <div className={styles.grid}>
      <Photo />
      <NameAndTitle />
      <LeftPane />
      <RightPane />
    </div>
  );
}
