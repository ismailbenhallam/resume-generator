import styles from "./Divider.module.css";

export default function Divider() {
  return (
    <div className={styles.divider}>
      <div className={styles.shadow}></div>
    </div>
  );
}
