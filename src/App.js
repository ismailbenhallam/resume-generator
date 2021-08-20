import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/Profile/ProfilePage";
import Template1 from "./components/templates/template1/Template1";
import Template2 from "./components/templates/template2/Template2";

function App() {
  const templates = {
    template1: <Template1 />,
    template2: <Template2 />,
  };

  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  const handleChangeTemplate = (event) => {
    setSelectedTemplate(templates[event.target.value]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <ProfilePage />
          <Link to="/">Voir</Link>
        </Route>
        <Route path="/">
          <Link to="/profile">Profile</Link>
          <select onChange={handleChangeTemplate}>
            {Object.entries(templates).map((entry) => (
              <option key={entry[0]} value={entry[0]}>
                {entry[0]}
              </option>
            ))}
          </select>
          <div className="save-button-wrapper">
            <button
              className="save-button"
              tabIndex={1}
              onClick={() => window.print()}>
              Save as PDF&nbsp;
              <FontAwesomeIcon icon={faFilePdf} className="icon" />
            </button>
          </div>
          <div id="resume" className="container">
            {selectedTemplate}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
