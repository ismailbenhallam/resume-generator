import { useState } from "react";
import capitalize from "../../utilities/capitalize";
import Assets from "./assets/Assets";
import Certifications from "./certifications/Certifications";
import Coordinates from "./coordinates/Coordinates";
import Education from "./education/Education";
import Experiences from "./experiences/Experiences";
import Interests from "./interests/Interests";
import Languages from "./languages/Languages";
import PrincipalSkillss from "./principal-skills/PrincipalSkills";
import "./ProfilePage.css";
import Skills from "./skills/Skills";

export default function ProfilePage(props) {
  const elements = [
    "coordinates",
    "languages",
    "assets",
    "interests",
    "experiences",
    "education",
    "skills",
    "principal skills",
    "certifications",
  ];
  const [selectedLi, setSelectedState] = useState(elements[0]);

  const handleLiClick = (event) => {
    event.preventDefault();
    setSelectedState(event.target.dataset["name"]);
  };

  return (
    <div id="profile-page">
      <h1>My Profile</h1>
      <div className="grid">
        <div className="informations-tab">
          <ul>
            {elements.map((el) =>
              selectedLi === el ? (
                <li
                  key={el}
                  onClick={handleLiClick}
                  data-name={el}
                  className="active">
                  {capitalize(el)}
                </li>
              ) : (
                <li key={el} onClick={handleLiClick} data-name={el}>
                  {capitalize(el)}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="active-tab">
          {selectedLi === "coordinates" && <Coordinates />}
          {selectedLi === "languages" && <Languages />}
          {selectedLi === "assets" && <Assets />}
          {selectedLi === "interests" && <Interests />}
          {selectedLi === "experiences" && <Experiences />}
          {selectedLi === "education" && <Education />}
          {selectedLi === "skills" && <Skills />}
          {selectedLi === "principal skills" && <PrincipalSkillss />}
          {selectedLi === "certifications" && <Certifications />}
        </div>
      </div>
    </div>
  );
}
