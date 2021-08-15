import { Component } from "react";
import PrincipalSkillsService from "../../../services/principal-skills-service";
import "./PrincipalSkills.css";

export default class PrincipalSkillss extends Component {
  constructor(props) {
    super(props);
    this.service = new PrincipalSkillsService();
    this.state = {
      value: "",
      principalSkills: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      principalSkills: this.service.getAll(),
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removePrincipalSkills = (skill) => {
    this.service.removeOne(skill);
    this.setState({
      principalSkills: this.service.getAll(),
    });
  };

  addPrincipalSkills = (event) => {
    event.preventDefault();
    if (!this.state.value) return;
    this.service.addOne(this.state.value);

    this.setState({
      principalSkills: this.service.getAll(),
      value: "",
    });
  };

  render() {
    return (
      <div className="principalSkills">
        <div className="principalSkills-list">
          {this.state.principalSkills.map((skill) => (
            <div key={skill} className="principalSkill">
              <span>{skill}</span>
              <button
                onClick={() => this.removePrincipalSkills(skill)}
                className="remove-btn">
                X
              </button>
            </div>
          ))}
        </div>
        <form className="principalSkills-input-wrapper">
          <div className="principalSkills-input">
            <label htmlFor="input-new-principalSkills">Principal Skill</label>
            <input
              id="input-new-principalSkills"
              name="value"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              required="required"
            />
          </div>
          <button onClick={this.addPrincipalSkills} className="add-btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}
