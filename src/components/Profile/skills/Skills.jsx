import { PureComponent } from "react";
import SkillsService from "../../../services/skills-service";
import capitalize from "../../../utilities/capitalize";
import "./Skills.css";

export default class Skills extends PureComponent {
  constructor(props) {
    super(props);
    this.service = new SkillsService();
    this.state = {
      title: "",
      details: "",
      skills: this.service.getAll(),
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeSkill = (skill) => {
    this.service.removeOne(skill);
    this.setState({ skills: this.service.getAll() });
  };

  addSkill = (event) => {
    event.preventDefault();
    if (!this.state.title) return;

    let details = "";
    if (this.state.details) {
      details = this.state.details.split(",");
      details = details.map((d) => capitalize(d.trim()));
    }
    this.service.addOne({
      [this.state.title]: details,
    });
    this.setState({
      skills: this.service.getAll(),
      title: "",
      details: "",
    });
  };

  render() {
    return (
      <div className="skills">
        <div className="skills-list">
          {Object.entries(this.state.skills).map((l) => (
            <div key={l[0]} className="skill">
              <span>{l[0]}</span>
              <span>{l[1] ? l[1].join(", ") : ""}</span>
              <button
                onClick={() => this.removeSkill(l[0])}
                className="remove-btn">
                X
              </button>
            </div>
          ))}
        </div>
        <form>
          <div className="skills-input-wrapper">
            <div className="skills-input">
              <label htmlFor="input-new-skill">Skill*</label>
              <input
                id="input-new-skill"
                name="title"
                type="text"
                onChange={this.handleChange}
                value={this.state.title}
                required="required"
              />
              <label htmlFor="input-new-skill-level">
                Details (comma separated)
              </label>
              <input
                id="input-new-skill-level"
                name="details"
                type="text"
                onChange={this.handleChange}
                value={this.state.details}
              />
            </div>
            <button onClick={this.addSkill} className="add-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
