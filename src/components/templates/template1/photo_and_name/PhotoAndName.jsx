import photo from "../../../../ismail.jpg";
import NameAndTitle from "../name_and_title/NameAndTitle";
import styles from "./PhotoAndName.module.css";

export default function PhotoAndName() {
  return (
    <div className={styles.photoWrapper}>
      <img src={photo} className={styles.photo} alt="Supposed to be me :/" />
      <NameAndTitle />
    </div>
  );
}
