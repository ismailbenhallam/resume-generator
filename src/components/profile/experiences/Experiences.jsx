import {
  faBriefcase,
  faCalendarDay,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { TOAST_WARNING_STYLE } from "../../../constants";
import ExperiencesService from "../../../services/experiences-service";
import capitalize from "../../../utilities/capitalize";
import styles from "./Experiences.module.css";

export default function Experiences() {
  const { t } = useTranslation();
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
    const toastId = toast.loading(capitalize(t("waiting...")));
    service.removeOne(exp);
    setExperiences(service.getAll());
    toast.success(capitalize(t("item deleted")), {
      id: toastId,
    });
  };

  const addExperience = (event) => {
    event.preventDefault();
    if (
      !inputs.title.trim() ||
      !inputs.enterprise.trim() ||
      !inputs.period.trim() ||
      !inputs.place.trim()
    ) {
      toast(
        capitalize(t("please fill in all mandatory fields")),
        TOAST_WARNING_STYLE
      );
      return;
    }
    const toastId = toast.loading(capitalize(t("waiting...")));
    service.addOne({
      period: inputs.period.trim(),
      title: inputs.title.trim(),
      enterprise: inputs.enterprise.trim(),
      place: inputs.place.trim(),
      details: inputs.details.trim(),
      more: inputs.more.trim(),
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

    toast.success(capitalize(t("item saved")), {
      id: toastId,
    });
  };

  return (
    <div className={styles.experiences}>
      {experiences.length > 0 && (
        <div className={styles.experiencesList}>
          {experiences.map((ex, index) => (
            <Fragment key={ex.title}>
              <div className={styles.experience}>
                <span className={styles.title}>{ex.title}</span>
                <span className={styles.enterprise}>
                  <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
                  &nbsp;
                  {ex.enterprise}
                </span>
                <span className={styles.period}>
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    className={styles.icon}
                  />
                  &nbsp;
                  {ex.period}
                </span>
                <button
                  onClick={() => removeExperience(ex)}
                  className={styles.removeBtn}>
                  X
                </button>
                <span>{ex.details}</span>
                <span>
                  <FontAwesomeIcon icon={faMapPin} className={styles.icon} />
                  &nbsp;{ex.place}
                </span>
                <span>{ex.more}</span>
              </div>
              {index + 1 < experiences.length && <hr />}
            </Fragment>
          ))}
        </div>
      )}
      <form>
        <div className={styles.inputWrapper}>
          <div className={styles.input}>
            <label htmlFor="input-new-experience-title">
              {capitalize(t("title"))}*
            </label>
            <input
              id="input-new-experience-title"
              name="title"
              type="text"
              onChange={handleChange}
              value={inputs.title}
              required="required"
            />
            <label htmlFor="input-new-experience-period">
              {capitalize(t("period"))}*
            </label>
            <input
              id="input-new-experience-period"
              name="period"
              type="text"
              onChange={handleChange}
              value={inputs.period}
              required="required"
            />
            <label htmlFor="input-new-experience-enterprise">
              {capitalize(t("enterprise"))}*
            </label>
            <input
              id="input-new-experience-enterprise"
              name="enterprise"
              type="text"
              onChange={handleChange}
              value={inputs.enterprise}
              required="required"
            />
            <label htmlFor="input-new-place">{capitalize(t("place"))}*</label>
            <input
              id="input-new-experience-place"
              name="place"
              type="text"
              onChange={handleChange}
              value={inputs.place}
              required="required"
            />
            <label htmlFor="input-new-experience-details">
              {capitalize(t("details"))}
            </label>
            <input
              id="input-new-experience-details"
              name="details"
              type="text"
              onChange={handleChange}
              value={inputs.details}
            />
            <label htmlFor="input-new-experience-more">
              {capitalize(t("more"))}
            </label>
            <input
              id="input-new-experience-more"
              name="more"
              type="text"
              onChange={handleChange}
              value={inputs.more}
            />
          </div>
          <button onClick={addExperience} className={styles.addBtn}>
            {capitalize(t("add"))}
          </button>
        </div>
      </form>
    </div>
  );
}
