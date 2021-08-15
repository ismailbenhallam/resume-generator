import { PureComponent } from "react";
import InterestsService from "../../../services/interests-service";
import "./Interests.css";

export default class Interests extends PureComponent {
  constructor(props) {
    super(props);
    this.interestsService = new InterestsService();
    this.state = {
      interest: "",
      interests: [],
    };
  }

  componentDidMount = () => {
    this.setState({ interests: this.interestsService.getAll() });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeInterest = (i) => {
    this.setState((state) => {
      // let array = state.interests.filter((inter) => i !== inter);
      // interests = [...array];
      this.interestsService.removeOne(i);
      return {
        interests: this.interestsService.getAll(),
      };
    });
  };

  addInterest = (event) => {
    event.preventDefault();
    if (!this.state.interest) return;
    // let i = this.state.interests;
    // i.push(this.state.interest);
    // interests.push(this.state.interest);
    this.interestsService.addOne(this.state.interest);
    this.setState({
      interests: this.interestsService.getAll(),
      interest: "",
    });
  };

  render() {
    return (
      <div className="interests">
        <div className="interests-list">
          {this.state.interests.map((i) => (
            <div key={i} className="interest">
              <span>{i}</span>
              <button
                onClick={() => this.removeInterest(i)}
                className="remove-btn">
                X
              </button>
            </div>
          ))}
        </div>
        <form>
          <div className="interests-input-wrapper">
            <div className="interests-input">
              <label htmlFor="input-new-interest">Interest</label>
              <input
                id="input-new-interest"
                name="interest"
                type="text"
                onChange={this.handleChange}
                value={this.state.interest}
                required="required"
              />
            </div>
            <button onClick={this.addInterest} className="add-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
