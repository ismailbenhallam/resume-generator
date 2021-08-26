import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import ConfiguredToaster from "./components/ConfiguredToaster";
import LanguageDropdown from "./components/LanguagesDropdown";
import ProfilePage from "./components/Profile/ProfilePage";
import Template1 from "./components/templates/template1/Template1";
import Template2 from "./components/templates/template2/Template2";

function App() {
  const templates = {
    template1: <Template1 />,
    template2: <Template2 />,
  };

  const { t } = useTranslation();

  const [selectedTemplate, setSelectedTemplate] = useState(
    Object.entries(templates)[0][1]
  );

  const handleChangeTemplate = (event) => {
    setSelectedTemplate(templates[event.target.value]);
  };

  return (
    <Router>
      <ConfiguredToaster />
      <LanguageDropdown />
      <Switch>
        <Route path="/profile">
          <ProfilePage />
          <Link to="/">Voir</Link>
        </Route>
        <Route path="/">
          <Link to="/profile">{t("profile")}</Link>
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
              {t("save as pdf")}&nbsp;
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
