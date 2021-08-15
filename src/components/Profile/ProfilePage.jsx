import { PureComponent } from "react";
import capitalize from "../../services/string-utilities";
import Assets from "./assets/Assets";
import Certifications from "./certifications/Certifications";
import Coordinates from "./coordinates/Coordinates";
import Interests from "./interests/Interests";
import Languages from "./languages/Languages";
import "./ProfilePage.css";

export default class ProfilePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedLi: "certifications",
    };
    this.elements = [
      "coordinates",
      "languages",
      "assets",
      "interests",
      "experiences",
      "education",
      "skills",
      "certifications",
    ];
  }

  handleLiClick = (event) => {
    event.preventDefault();
    this.setState({ selectedLi: event.target.dataset["name"] });
  };

  render() {
    return (
      <div id="profile-page">
        <div className="grid">
          <div className="informations-tab">
            {/* <h2>Informations Tab</h2> */}
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
