import Certifications from "./certifications/Certifications";
import Details from "./details/Details";
import PhotoAndName from "./photo_and_name/PhotoAndName";
import Education from "./realizations/education/Education";
import Experiences from "./realizations/experiences/Experiences";
import Skills from "./skills/Skills";
import "./Template1.css";

export default function Template1() {
  return (
    <>
      <div className="template1 left">
        <PhotoAndName />
        <Details />
      </div>
      <div className="template1 right">
        <Experiences />
        <Education />
        <Skills />
        <Certifications />
      </div>
    </>
  );
}
