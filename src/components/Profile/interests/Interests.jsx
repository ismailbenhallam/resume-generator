import { useState } from "react";
import InterestsService from "../../../services/interests-service";
import "./Interests.css";

export default function Interests() {
  const interestsService = new InterestsService();
  const [state, setState] = useState({
    interest: "",
    interests: interestsService.getAll(),
  });

  const handleChange = (event) => {
    setState({
      interests: state.interests,
      [event.target.name]: event.target.value,
    });
  };

  const removeInterest = (i) => {
    setState((oldState) => {
      interestsService.removeOne(i);
      return {
        interest: state.interest,
        interests: interestsService.getAll(),
      };
    });
  };

  const addInterest = (event) => {
    event.preventDefault();
    if (!state.interest.trim()) return;
    interestsService.addOne(state.interest.trim());
    setState({
      interests: interestsService.getAll(),
      interest: "",
    });
  };

  return (
    <div className="interests">
      {state.interests.length > 0 && (
        <div className="interests-list">
          {state.interests.map((i) => (
            <div key={i} className="interest">
              <span>{i}</span>
              <button onClick={() => removeInterest(i)} className="remove-btn">
                X
              </button>
            </div>
          ))}
        </div>
      )}
      <form>
        <div className="interests-input-wrapper">
          <div className="interests-input">
            <label htmlFor="input-new-interest">Interest</label>
            <input
              id="input-new-interest"
              name="interest"
              type="text"
              onChange={handleChange}
              value={state.interest}
              required="required"
            />
          </div>
          <button onClick={addInterest} className="add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
