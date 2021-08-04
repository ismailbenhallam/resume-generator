import "./App.css";
import Details from "./components/details/Details";
import Divider from "./components/helpers/divider/Divider";
import PhotoAndName from "./components/photo_and_name/PhotoAndName.jsx";
import Realisations from "./components/realisations/Realisations";
import experiences from "./data/experiences.js";
import formations from "./data/formations.js";

function App() {
  return (
    <div className="container">
      <div className="left">
        <PhotoAndName />
        <Details />
      </div>
      <div className="right">
        <Realisations
          realisations={experiences}
          title="Expériences professionnelles et projets réalisés"
        />
        <Divider />
        <Realisations
          realisations={formations}
          title="Diplômes et Formations"
        />
      </div>
    </div>
  );
}

export default App;
