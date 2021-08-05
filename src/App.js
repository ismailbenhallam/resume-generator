import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import "./App.css";
import Certifications from "./components/certifications/Certifications";
import Details from "./components/details/Details";
import Divider from "./components/helpers/divider/Divider";
import PhotoAndName from "./components/photo_and_name/PhotoAndName.jsx";
import Education from "./components/realisations/education/Education";
import Experiences from "./components/realisations/experiences/Experiences";
import Skills from "./components/skills/Skills";

class App extends PureComponent {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}>
          <button
            className="saveButton"
            tabIndex={1}
            onClick={() => window.print()}>
            Save as PDF&nbsp;
            <FontAwesomeIcon icon={faFilePdf} className="icon" />
          </button>
        </div>
        <div id="resume" className="container">
          <div className="left">
            <PhotoAndName />
            <Details />
          </div>
          <div className="right">
            <Experiences />
            <Divider />
            <Education />
            <Divider />
            <Skills />
            <Divider />
            <Certifications />
          </div>
        </div>
      </>
    );
  }
}

export default App;
