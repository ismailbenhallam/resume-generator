import Certifications from "./certifications/Certifications";
import Contact from "./contact/Contact";
import Languages from "./languages/Languages";
import "./LeftPane.css";
import Skills from "./skills/Skills";

export default function LeftPane() {
  return (
    <div className="left-pane">
      <Contact calculateAge={true} ageSuffix="ans" />
      <Skills />
      <Languages />
      <Certifications />
    </div>
  );
}
