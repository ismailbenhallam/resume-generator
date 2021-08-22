import { useState } from "react";
import { useTranslation } from "react-i18next";
import useRequiredFieldsToast from "../../../hooks/useRequiredFieldsToast";
import useToast from "../../../hooks/useToast";
import InterestsService from "../../../services/interests-service";
import capitalize from "../../../utilities/capitalize";
import "./Interests.css";

export default function Interests() {
  const { t } = useTranslation();
  const [removeWaitingToast, removeSuccessToast] = useToast("item deleted");
  const [addWaitingToast, addSuccessToast] = useToast("item saved");
  const warnToast = useRequiredFieldsToast();

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
    removeWaitingToast();
    interestsService.removeOne(i);
    setState({
      interest: state.interest,
      interests: interestsService.getAll(),
    });
    removeSuccessToast();
  };

  const addInterest = (event) => {
    event.preventDefault();
    if (!state.interest.trim()) {
      warnToast();
      return;
    }

    addWaitingToast();
    interestsService.addOne(state.interest.trim());
    setState({
      interests: interestsService.getAll(),
      interest: "",
    });
    addSuccessToast();
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
            <label htmlFor="input-new-interest">
              {capitalize(t("interest"))}
            </label>
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
            {capitalize(t("add"))}
          </button>
        </div>
      </form>
    </div>
  );
}
