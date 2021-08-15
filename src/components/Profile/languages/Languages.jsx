import { PureComponent } from "react";
import LanguagesService from "../../../services/languages-service";
import "./Languages.css";

export default class Languages extends PureComponent {
  constructor(props) {
    super(props);
    this.service = new LanguagesService();
    this.state = {
      language: "",
      level: "",
      langagues: {},
    };
  }

  componentDidMount = () => {
    this.setState({ langagues: this.service.getAll() });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeLanguage = (name) => {
    // delete this.langagues[name];
    this.service.removeOne(name);
    this.setState({ langagues: this.service.getAll() });
  };

  addLanguage = (event) => {
    event.preventDefault();
    this.service.addOne({
      [this.state.language]: this.state.level,
    });
    // if (!this.state.language || !this.state.level) return;
    // this.langagues[this.state.language] = this.state.level;
    this.setState({
      langagues: this.service.getAll(),
      language: "",
      level: "",
    });
  };

  render() {
    return (
      <div className="languages">
        <div className="langagues-list">
          {Object.entries(this.state.langagues).map((l) => (
            <div key={l[0]} className="langague">
              <span>{l[0]}</span>
              <span>{l[1]}</span>
              <button
                onClick={() => this.removeLanguage(l[0])}
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
    );
  }
}
