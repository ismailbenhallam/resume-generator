import { PureComponent } from "react";
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

export default class ProfilePage extends PureComponent {
  constructor(props) {
    super(props);
    this.elements = [
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
    this.state = {
      selectedLi: this.elements[0],
    };
  }

  handleLiClick = (event) => {
    event.preventDefault();
    this.setState({ selectedLi: event.target.dataset["name"] });
  };

  render() {
    return (
      <div id="profile-page">
        <h1>My Profile</h1>
        <div className="grid">
          <div className="informations-tab">
            <ul>
              {this.elements.map((el) =>
                this.state.selectedLi === el ? (
                  <li
                    key={el}
                    onClick={this.handleLiClick}
                    data-name={el}
                    className="active">
                    {capitalize(el)}
                  </li>
                ) : (
                  <li key={el} onClick={this.handleLiClick} data-name={el}>
                    {capitalize(el)}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="active-tab">
            {this.state.selectedLi === "coordinates" && <Coordinates />}
            {this.state.selectedLi === "languages" && <Languages />}
            {this.state.selectedLi === "assets" && <Assets />}
            {this.state.selectedLi === "interests" && <Interests />}
            {this.state.selectedLi === "experiences" && <Experiences />}
            {this.state.selectedLi === "education" && <Education />}
            {this.state.selectedLi === "skills" && <Skills />}
            {this.state.selectedLi === "principal skills" && (
              <PrincipalSkillss />
            )}
            {this.state.selectedLi === "certifications" && <Certifications />}
          </div>
        </div>
        {/* {this.state.selectedLi === "coordinates" && (
          <button className="save-btn">Save</button>
        )} */}
      </div>
    );
  }
}
