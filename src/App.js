import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import "./App.css";
import Template1 from "./templates/template1/Template1.jsx";

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
          <Template1 />;
        </div>
      </>
    );
  }
}

export default App;
