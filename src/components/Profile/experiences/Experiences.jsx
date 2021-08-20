import {
  faBriefcase,
  faCalendarDay,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import ExperiencesService from "../../../services/experiences-service";
import "./Experiences.css";

export default function Experiences(props) {
  const service = new ExperiencesService();
  const [inputs, setInputs] = useState({
    title: "",
    period: "",
    enterprise: "",
    place: "",
    details: "",
    more: "",
  });
  const [experiences, setExperiences] = useState(service.getAll());

  const handleChange = (event) => {
    setInputs((oldInputs) => {
      return { ...oldInputs, [event.target.name]: event.target.value };
    });
  };

  const removeExperience = (exp) => {
    service.removeOne(exp);
    setExperiences(service.getAll());
  };

  const addExperience = (event) => {
    event.preventDefault();
    if (!inputs.title || !inputs.enterprise || !inputs.period || !inputs.place)
      return;

    service.addOne({
      period: inputs.period,
      title: inputs.title,
      enterprise: inputs.enterprise,
      place: inputs.place,
      details: inputs.details,
      more: inputs.more,
    });

    setInputs({
      experiences: service.getAll(),
      title: "",
      period: "",
      enterprise: "",
      place: "",
      details: "",
      more: "",
    });

    setExperiences(service.getAll());

    console.log("Koo");
  };

  return (
    <div className="experiences">
      <div className="experiences-list">
        {experiences.map((ex, index) => (
          <Fragment key={ex.title}>
            <div className="experience">
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
                onClick={() => removeExperience(ex)}
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
            {index + 1 < experiences.length && <hr />}
          </Fragment>
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
              onChange={handleChange}
              value={inputs.title}
              required="required"
            />
            <label htmlFor="input-new-experience-period">Period*</label>
            <input
              id="input-new-experience-period"
              name="period"
              type="text"
              onChange={handleChange}
              value={inputs.period}
              required="required"
            />
            <label htmlFor="input-new-experience-enterprise">Enterprise*</label>
            <input
              id="input-new-experience-enterprise"
              name="enterprise"
              type="text"
              onChange={handleChange}
              value={inputs.enterprise}
              required="required"
            />
            <label htmlFor="input-new-place">Place*</label>
            <input
              id="input-new-experience-place"
              name="place"
              type="text"
              onChange={handleChange}
              value={inputs.place}
              required="required"
            />
            <label htmlFor="input-new-experience-details">Details</label>
            <input
              id="input-new-experience-details"
              name="details"
              type="text"
              onChange={handleChange}
              value={inputs.details}
            />
            <label htmlFor="input-new-experience-more">More</label>
            <input
              id="input-new-experience-more"
              name="more"
              type="text"
              onChange={handleChange}
              value={inputs.more}
            />
          </div>
          <button onClick={addExperience} className="add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
