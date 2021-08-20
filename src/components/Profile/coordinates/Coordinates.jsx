import { useState } from "react";
import CoordinatesService from "../../../services/coordinates";
import "./Coordinates.css";

const Coordinates = () => {
  const service = new CoordinatesService();
  const [inputs, setInputs] = useState({
    ...service.getAll(),
  });

  const handleChange = (event) => {
    setInputs((state) => {
      return { ...state, [event.target.name]: event.target.value };
    });
  };

  const save = (event) => {
    event.preventDefault();
    Object.entries(inputs).forEach((entry) => {
      service.addOne({
        [entry[0]]: entry[1],
      });
    });
  };

  return (
    <form className="coordinates-form">
      <div className="coordinates">
        <label htmlFor="input-firstName">First Name</label>
        <input
          id="input-firstName"
          name="firstName"
          type="text"
          value={inputs.firstName}
          onChange={handleChange}
        />
        <label htmlFor="input-lastName">Last Name</label>
        <input
          id="input-lastName"
          name="lastName"
          type="text"
          value={inputs.lastName}
          onChange={handleChange}
        />
        <label htmlFor="input-title">Title</label>
        <input
          id="input-title"
          name="title"
          type="text"
          value={inputs.title}
          onChange={handleChange}
        />
        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          name="email"
          type="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <label htmlFor="input-mobile">Mobile</label>
        <input
          id="input-mobile"
          name="mobile"
          type="tel"
          value={inputs.mobile}
          onChange={handleChange}
        />
        <label htmlFor="input-address">Address</label>
        <input
          id="input-address"
          name="address"
          type="text"
          value={inputs.address}
          onChange={handleChange}
        />
        <label htmlFor="input-birthDate">Birth Date</label>
        <input
          id="input-birthDate"
          name="birthDate"
          type="date"
          value={inputs.birthDate}
          onChange={handleChange}
        />
        <label htmlFor="input-website">Website</label>
        <input
          id="input-website"
          name="website"
          type="URL"
          value={inputs.website}
          onChange={handleChange}
        />
        <label htmlFor="input-github">GitHub</label>
        <input
          id="input-github"
          name="github"
          type="URL"
          value={inputs.github}
          onChange={handleChange}
        />
        <label htmlFor="input-linkedin">LinkedIn</label>
        <input
          id="input-linkedin"
          name="linkedin"
          type="URL"
          value={inputs.linkedin}
          onChange={handleChange}
        />
        <label htmlFor="input-nationality">Nationality</label>
        <input
          id="input-nationality"
          name="nationality"
          type="text"
          value={inputs.nationality}
          onChange={handleChange}
        />
      </div>
      <button className="save-btn" onClick={save}>
        Save
      </button>
    </form>
  );
};

export default Coordinates;
