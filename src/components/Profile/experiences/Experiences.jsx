import {
  faBriefcase,
  faCalendarDay,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import ExperiencesService from "../../../services/experiences-service";
import "./Experiences.css";

export default class Experiences extends PureComponent {
  constructor(props) {
    super(props);
    this.service = new ExperiencesService();
    this.state = {
      title: "",
      period: "",
      enterprise: "",
      place: "",
      details: "",
      more: "",
      experiences: [],
    };
  }

  componentDidMount = () => {
    this.setState({ experiences: this.service.getAll() });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeExperience = (exp) => {
    this.service.removeOne(exp);
    this.setState({ experiences: this.service.getAll() });
  };

  addExperience = (event) => {
    event.preventDefault();
    if (
      !this.state.title ||
      !this.state.enterprise ||
      !this.state.period ||
      !this.state.place
    )
      return;

    this.service.addOne({
      period: this.state.period,
      title: this.state.title,
      enterprise: this.state.enterprise,
      place: this.state.place,
      details: this.state.details,
      more: this.state.more,
    });

    this.setState({
      experiences: this.service.getAll(),
      title: "",
      period: "",
      enterprise: "",
      place: "",
      details: "",
      more: "",
    });
  };

  render() {
    return (
      <div className="experiences">
        <div className="experiences-list">
          {this.state.experiences.map((ex, index) => (
            <>
              <div key={ex.title} className="experience">
                <span className="title">{ex.title}</span>
                <span className="enterprise">
                  <FontAwesomeIcon icon={faBriefcase} className="icon" />
                  &nbsp;
                  {ex.enterprise}
                </span>
                <span className="period">
                  <FontAwesomeIcon icon={faCalendarDay} className="icon" />
                  &nbsp;
                  {ex.period}
                </span>
                <button
                  onClick={() => this.removeExperience(ex)}
                  className="remove-btn">
                  X
                </button>
                <span>{ex.details}</span>
                <span>
                  <FontAwesomeIcon icon={faMapPin} className="icon" />
                  &nbsp;{ex.place}
                </span>
                <span>{ex.more}</span>
              </div>
              {index + 1 < this.state.experiences.length && <hr />}
            </>
          ))}
        </div>
        <form>
          <div className="experiences-input-wrapper">
            <div className="experiences-input">
              <label htmlFor="input-new-experience-title">Title*</label>
              <input
                id="input-new-experience-title"
                name="title"
                type="text"
                onChange={this.handleChange}
                value={this.state.title}
                required="required"
              />
              <label htmlFor="input-new-experience-period">Period*</label>
              <input
                id="input-new-experience-period"
                name="period"
                type="text"
                onChange={this.handleChange}
                value={this.state.period}
                required="required"
              />
              <label htmlFor="input-new-experience-enterprise">
                Enterprise*
              </label>
              <input
                id="input-new-experience-enterprise"
                name="enterprise"
                type="text"
                onChange={this.handleChange}
                value={this.state.enterprise}
                required="required"
              />
              <label htmlFor="input-new-place">Place*</label>
              <input
                id="input-new-experience-place"
                name="place"
                type="text"
                onChange={this.handleChange}
                value={this.state.place}
                required="required"
              />
              <label htmlFor="input-new-experience-details">Details</label>
              <input
                id="input-new-experience-details"
                name="details"
                type="text"
                onChange={this.handleChange}
                value={this.state.details}
              />
              <label htmlFor="input-new-experience-more">More</label>
              <input
                id="input-new-experience-more"
                name="more"
                type="text"
                onChange={this.handleChange}
                value={this.state.more}
              />
            </div>
            <button onClick={this.addExperience} className="add-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
