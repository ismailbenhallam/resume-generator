import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Template1 from "./templates/template1/Template1";
import Template2 from "./templates/template2/Template2";

export default function Home() {
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
    <>
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
    </>
  );
}
