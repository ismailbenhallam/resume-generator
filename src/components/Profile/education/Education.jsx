import { Fragment, useState } from "react";
import EducationService from "../../../services/education-service.js";
import "./Education.css";

export default function Education() {
  const service = new EducationService();
  const currentYear = new Date().getFullYear();
  const [education, setEducation] = useState(service.getAll());

  const [inputs, setInputs] = useState({
    year: currentYear,
    title: "",
    school: "",
    place: "",
  });

  const handleChange = (event) => {
    setInputs((state) => {
      return { ...state, [event.target.name]: event.target.value };
    });
  };

  const removeEducation = (educ) => {
    service.removeOne(educ);
    setEducation(service.getAll());
  };

  const addEducation = (event) => {
    event.preventDefault();
    if (
      !inputs.title.trim() ||
      !inputs.school.trim() ||
      inputs.year > currentYear ||
      inputs.year < 1970
    )
      return;

    service.addOne({
      title: inputs.title.trim(),
      school: inputs.school.trim(),
      period: +inputs.year.trim(),
      place: inputs.place.trim(),
    });

    setInputs({
      year: "",
      title: "",
      school: "",
      place: "",
    });

    setEducation(service.getAll());
  };

  return (
    <div className="educations">
      {education.length > 0 && (
        <div className="educations-list">
          {education.map((educ, index) => (
            <Fragment key={educ.title}>
              <div key={educ.title} className="education">
                <span>{educ.title}</span>
                <span>{educ.school}</span>
                <span>{educ.place}</span>
                <span>{educ.period}</span>
                <button
                  onClick={() => removeEducation(educ)}
                  className="remove-btn">
                  X
                </button>
              </div>
              {index + 1 < education.length && <hr />}
            </Fragment>
          ))}
        </div>
      )}
      <form>
        <div className="langagues-input-wrapper">
          <div className="educations-input">
            <label htmlFor="input-new-education">Title*</label>
            <input
              id="input-new-education"
              name="title"
              type="text"
              onChange={handleChange}
              value={inputs.title}
              required="required"
            />
            <label htmlFor="input-new-education-level">School*</label>
            <input
              id="input-new-education-level"
              name="school"
              type="text"
              onChange={handleChange}
              value={inputs.school}
              required="required"
            />
            <label htmlFor="input-new-education-level">Year*</label>
            <input
              id="input-new-education-level"
              name="year"
              type="number"
              min={1970}
              max={currentYear}
              step="1"
              onChange={handleChange}
              value={+inputs.year}
              required="required"
            />
            <label htmlFor="input-new-education-level">Place</label>
            <input
              id="input-new-education-level"
              name="place"
              type="text"
              onChange={handleChange}
              value={inputs.place}
              required="required"
            />
          </div>
          <button onClick={addEducation} className="add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
