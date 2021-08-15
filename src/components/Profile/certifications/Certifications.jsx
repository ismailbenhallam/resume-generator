import { PureComponent } from "react";
import CertificationsService from "../../../services/certifications-service";
import "./Certifications.css";

export default class Certifications extends PureComponent {
  constructor(props) {
    super(props);
    this.service = new CertificationsService();
    this.state = {
      certification: "",
      organization: "",
      url: "",
      certifications: [],
    };
  }

  componentDidMount = () => {
    this.setState({ certifications: this.service.getAll() });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeCertification = (certif) => {
    // delete this.certifications[name];
    this.service.removeOne(certif);
    this.setState({ certifications: this.service.getAll() });
  };

  addCertification = (event) => {
    event.preventDefault();
    if (!this.state.certification || !this.state.url) return;
    this.service.addOne({
      name: this.state.certification,
      organization: this.state.organization,
      url: this.state.url,
    });
    // this.certifications[this.state.certification] = this.state.level;
    this.setState({
      certifications: this.service.getAll(),
      certification: "",
      level: "",
    });
  };

  render() {
    this.state.certifications.forEach(console.log);
    return (
      <div className="certifications">
        <div className="certifications-list">
          {this.state.certifications.map((certif, index) => (
            <>
              <div key={certif.name} className="certification">
                <span>{certif.name}</span>
                <span>{certif.organization}</span>
                <a href={certif.url} target="_blank" rel="noreferrer">
                  {certif.url}
                </a>
                <button
                  onClick={() => this.removeCertification(certif)}
                  className="remove-btn">
                  X
                </button>
              </div>
              {index + 1 < this.state.certifications.length && <hr />}
            </>
          ))}
        </div>
        <form>
          <div className="certifications-input-wrapper">
            <div className="certifications-input">
              <label htmlFor="input-new-certification">Name*</label>
              <input
                id="input-new-certification"
                name="certification"
                type="text"
                onChange={this.handleChange}
                value={this.state.certification}
                required="required"
              />
              <label htmlFor="input-new-certification-level">
                Organization
              </label>
              <input
                id="input-new-certification-level"
                name="organization"
                type="text"
                onChange={this.handleChange}
                value={this.state.organization}
              />
              <label htmlFor="input-new-certification-level">URL*</label>
              <input
                id="input-new-certification-level"
                name="url"
                type="URL"
                onChange={this.handleChange}
                value={this.state.url}
                required="required"
              />
            </div>
            <button onClick={this.addCertification} className="add-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
