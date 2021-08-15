import { PureComponent } from "react";
import EducationService from "../../../services/education-service.js";
import "./Education.css";

export default class Education extends PureComponent {
  constructor(props) {
    super(props);
    this.service = new EducationService();
    this.state = {
      education: this.service.getAll(),
      year: 2021,
      title: "",
      school: "",
      place: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeEducation = (educ) => {
    this.service.removeOne(educ);
    this.setState({ education: this.service.getAll() });
  };

  addEducation = (event) => {
    event.preventDefault();
    if (
      !this.state.title ||
      !this.state.school ||
      !this.state.place ||
      !this.state.year
    )
      return;

    this.service.addOne({
      title: this.state.title,
      school: this.state.school,
      period: this.state.year,
      place: this.state.place,
    });

    this.setState({
      education: this.service.getAll(),
      year: "",
      title: "",
      school: "",
      place: "",
    });
  };

  render() {
    return (
      <div className="educations">
        <div className="educations-list">
          {this.state.education.map((educ, index) => (
            <>
              <div key={educ.title} className="education">
                <span>{educ.title}</span>
                <span>{educ.school}</span>
                <span>{educ.place}</span>
                <span>{educ.period}</span>
                <button
                  onClick={() => this.removeEducation(educ)}
                  className="remove-btn">
                  X
                </button>
              </div>
              {index + 1 < this.state.education.length && <hr />}
            </>
          ))}
        </div>
        <form>
          <div className="langagues-input-wrapper">
            <div className="educations-input">
              <label htmlFor="input-new-education">Title</label>
              <input
                id="input-new-education"
                name="title"
                type="text"
                onChange={this.handleChange}
                value={this.state.title}
                required="required"
              />
              <label htmlFor="input-new-education-level">School</label>
              <input
                id="input-new-education-level"
                name="school"
                type="text"
                onChange={this.handleChange}
                value={this.state.school}
                required="required"
              />
              <label htmlFor="input-new-education-level">Year</label>
              <input
                id="input-new-education-level"
                name="year"
                type="number"
                min="1900"
                max="2099"
                step="1"
                value="2021"
                onChange={this.handleChange}
                value={this.state.year}
                required="required"
              />
              <label htmlFor="input-new-education-level">Place</label>
              <input
                id="input-new-education-level"
                name="place"
                type="text"
                onChange={this.handleChange}
                value={this.state.place}
                required="required"
              />
            </div>
            <button onClick={this.addEducation} className="add-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
