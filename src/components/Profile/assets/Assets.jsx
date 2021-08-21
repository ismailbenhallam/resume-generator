import { useState } from "react";
import { useTranslation } from "react-i18next";
import AssetsService from "../../../services/assets-service";
import capitalize from "../../../utilities/capitalize";
import "./Assets.css";

export default function Assets() {
  const { t } = useTranslation();
  const assetsService = new AssetsService();
  const [state, setState] = useState({
    asset: "",
    assets: assetsService.getAll(),
  });

  const handleChange = (event) => {
    setState((oldState) => {
      return { ...oldState, [event.target.name]: event.target.value };
    });
  };

  const removeAsset = (a) => {
    assetsService.removeOne(a);
    setState((old) => {
      return {
        ...old,
        assets: assetsService.getAll(),
      };
    });
  };

  const addAsset = (event) => {
    event.preventDefault();
    if (!state.asset.trim()) return;
    assetsService.addOne(state.asset.trim());

    setState({
      assets: assetsService.getAll(),
      asset: "",
    });
  };

  return (
    <div className="assets">
      {state.assets.length > 0 && (
        <div className="assets-list">
          {state.assets.map((a) => (
            <div key={a} className="asset">
              <span>{a}</span>
              <button onClick={() => removeAsset(a)} className="remove-btn">
                X
              </button>
            </div>
          ))}
        </div>
      )}
      <form>
        <div className="assets-input-wrapper">
          <div className="assets-input">
            <label htmlFor="input-new-asset">{capitalize(t("asset"))}</label>
            <input
              id="input-new-asset"
              name="asset"
              type="text"
              onChange={handleChange}
              value={state.asset}
              required="required"
            />
          </div>
          <button onClick={addAsset} className="add-btn">
            {capitalize(t("add"))}
          </button>
        </div>
      </form>
    </div>
  );
}
