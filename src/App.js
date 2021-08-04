import "./App.css";
import Certifications from "./components/certifications/Certifications";
import Details from "./components/details/Details";
import Divider from "./components/helpers/divider/Divider";
import PhotoAndName from "./components/photo_and_name/PhotoAndName.jsx";
import Education from "./components/realisations/education/Education";
import Experiences from "./components/realisations/experiences/Experiences";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="container">
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
  );
}

export default App;
