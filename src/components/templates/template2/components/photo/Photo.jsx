import photo from "../../../../../ismail.jpg";
import styles from "./Photo.module.css";

export default function Photo() {
  return (
    <div className={styles.photoWrapper}>
      <img src={photo} alt="Me :)" />
    </div>
  );
}
