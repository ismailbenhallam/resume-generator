import Certifications from "./certifications/Certifications";
import Details from "./details/Details";
import PhotoAndName from "./photo_and_name/PhotoAndName";
import Education from "./realizations/education/Education";
import Experiences from "./realizations/experiences/Experiences";
import Skills from "./skills/Skills";
import styles from "./Template1.module.css";

export default function Template1() {
  return (
    <>
      <div className={styles.left}>
        <PhotoAndName />
        <Details />
      </div>
      <div className={styles.right}>
        <Experiences />
        <Education />
        <Skills />
        <Certifications />
      </div>
    </>
  );
}
