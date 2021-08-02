import "./App.css";
import Details from "./components/details/Details";
import PhotoAndName from "./components/photo_and_name/PhotoAndName.jsx";

function App() {
  return (
    <div className="container">
      <div className="left">
        <PhotoAndName />
        <Details />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
