import { PureComponent } from "react";
import CoordinatesService from "../../../services/coordinates";
import "./Coordinates.css";

export default class Coordinates extends PureComponent {
  constructor(props) {
    super(props);
    this.service = new CoordinatesService();
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      birthDate: "", // ubrkbfkbnf
      email: "",
      github: "",
      linkedin: "",
      mobile: "",
      website: "",
      nationality: "",
    };
  }

  componentDidMount = () => {
    this.setState((state) => {
      let all = this.service.getAll();
      return {
        ...all,
      };
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  save = (event) => {
    event.preventDefault();
    Object.entries(this.state).forEach((entry) => {
      // informations[entry[0]] = entry[1];
      this.service.addOne({
        [entry[0]]: entry[1],
      });
    });
  };

  render() {
    return (
      <form className="coordinates-form">
        <div className="coordinates">
          <label htmlFor="input-firstName">First Name</label>
          <input
            id="input-firstName"
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label htmlFor="input-lastName">Last Name</label>
          <input
            id="input-lastName"
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <label htmlFor="input-title">Title</label>
          <input
            id="input-title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="input-mobile">Mobile</label>
          <input
            id="input-mobile"
            name="mobile"
            type="tel"
            value={this.state.mobile}
            onChange={this.handleChange}
          />
          <label htmlFor="input-address">Address</label>
          <input
            id="input-address"
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <label htmlFor="input-birthDate">Birth Date</label>
          <input
            id="input-birthDate"
            name="birthDate"
            type="date"
            value={this.state.birthDate}
            onChange={this.handleChange}
          />
          <label htmlFor="input-website">Website</label>
          <input
            id="input-website"
            name="website"
            type="URL"
            value={this.state.website}
            onChange={this.handleChange}
          />
          <label htmlFor="input-github">GitHub</label>
          <input
            id="input-github"
            name="github"
            type="URL"
            value={this.state.github}
            onChange={this.handleChange}
          />
          <label htmlFor="input-linkedin">LinkedIn</label>
          <input
            id="input-linkedin"
            name="linkedin"
            type="URL"
            value={this.state.linkedin}
            onChange={this.handleChange}
          />
          <label htmlFor="input-nationality">Nationality</label>
          <input
            id="input-nationality"
            name="nationality"
            type="text"
            value={this.state.nationality}
            onChange={this.handleChange}
          />
        </div>
        <button className="save-btn" onClick={this.save}>
          Save
        </button>
      </form>
    );
  }
}
