import { PureComponent } from "react";
import capitalize from "../services/string_utilities";
import "./ProfilePage.css";

export default class ProfilePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedLi: "languages",
      language: "",
      level: "",
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
    this.langagues = [
      { name: "Français", level: "Bonne maitrise" },
      { name: "Anglais", level: "Connaissance de base" },
      { name: "Arabe", level: "Maternnelle" },
    ];
  }

  handleLiClick = (event) => {
    event.preventDefault();
    this.setState({ selectedLi: event.target.dataset["name"] });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeLanguage = (l) => {
    console.log(this.langagues.splice(this.langagues.indexOf(l), 1));
    this.forceUpdate();
  };

  addLanguage = () => {
    if (!this.state.language || !this.state.level) return;
    this.langagues.push({
      name: this.state.language,
      level: this.state.level,
    });
    this.setState({ language: "", level: "" });
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
            {this.state.selectedLi === "coordinates" && (
              <div className="coordinates">
                <label htmlFor="input-firstName">First Name</label>
                <input id="input-firstName" name="firstName" type="text" />
                <label htmlFor="input-lastName">Last Name</label>
                <input id="input-lastName" name="lastName" type="text" />
                <label htmlFor="input-title">Title</label>
                <input id="input-title" name="title" type="text" />
                <label htmlFor="input-email">Email</label>
                <input id="input-email" name="email" type="email" />
                <label htmlFor="input-address">Address</label>
                <input id="input-address" name="address" type="text" />
                <label htmlFor="input-birthDate">Birth Date</label>
                <input id="input-birthDate" name="birthDate" type="date" />
                <label htmlFor="input-website">Website</label>
                <input id="input-website" name="website" type="url" />
                <label htmlFor="input-github">GitHub</label>
                <input id="input-github" name="gitHub" type="url" />
                <label htmlFor="input-linkedin">LinkedIn</label>
                <input id="input-linkedin" name="linkedIn" type="url" />
              </div>
            )}
            {this.state.selectedLi === "languages" && (
              <div className="languages">
                <div className="langagues-list">
                  {this.langagues.map((l) => (
                    <div key={l.name} className="langague">
                      <span>{l.name}</span>
                      <span>{l.level}</span>
                      <button
                        onClick={() => this.removeLanguage(l)}
                        className="remove-btn">
                        X
                      </button>
                    </div>
                  ))}
                </div>
                <form>
                  <div className="langagues-input-wrapper">
                    <div className="languages-input">
                      <label htmlFor="input-new-language">Language</label>
                      <input
                        id="input-new-language"
                        name="language"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.language}
                        required="required"
                      />
                      <label htmlFor="input-new-language-level">Level</label>
                      <input
                        id="input-new-language-level"
                        name="level"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.level}
                        required="required"
                      />
                    </div>
                    <button onClick={this.addLanguage} className="add-btn">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        {this.state.selectedLi === "coordinates" && (
          <button className="save-btn">Save</button>
        )}
      </div>
    );
  }
}
