import { useState } from "react";
import { useTranslation } from "react-i18next";
import useRequiredFieldsToast from "../../../hooks/useRequiredFieldsToast";
import useToast from "../../../hooks/useToast";
import AssetsService from "../../../services/assets-service";
import capitalize from "../../../utilities/capitalize";
import styles from "./Assets.module.css";

export default function Assets() {
  const { t } = useTranslation();
  const [removeWaitingToast, removeSuccessToast] = useToast("item deleted");
  const [addWaitingToast, addSuccessToast] = useToast("item saved");
  const warnToast = useRequiredFieldsToast();
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
    removeWaitingToast();
    assetsService.removeOne(a);
    setState((old) => {
      return {
        ...old,
        assets: assetsService.getAll(),
      };
    });
    removeSuccessToast();
  };

  const addAsset = (event) => {
    event.preventDefault();
    if (!state.asset.trim()) {
      warnToast();
      return;
    }
    addWaitingToast();
    assetsService.addOne(state.asset.trim());
    setState({
      assets: assetsService.getAll(),
      asset: "",
    });
    addSuccessToast();
  };

  return (
    <div className={styles.assets}>
      {state.assets.length > 0 && (
        <div className={styles.assetsList}>
          {state.assets.map((a) => (
            <div key={a} className={styles.asset}>
              <span>{a}</span>
              <button
                onClick={() => removeAsset(a)}
                className={styles.removeBtn}>
                X
              </button>
            </div>
          ))}
        </div>
      )}
      <form>
        <div className={styles.inputWrapper}>
          <div className={styles.input}>
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
          <button onClick={addAsset} className={styles.addBtn}>
            {capitalize(t("add"))}
          </button>
        </div>
      </form>
    </div>
  );
}
