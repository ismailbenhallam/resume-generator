import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import useRequiredFieldsToast from "../../../hooks/useRequiredFieldsToast";
import useToast from "../../../hooks/useToast";
import CertificationsService from "../../../services/certifications-service";
import capitalize from "../../../utilities/capitalize";
import "./Certifications.css";

export default function Certifications() {
  const { t } = useTranslation();
  const [removeWaitingToast, removeSuccessToast] = useToast("item deleted");
  const [addWaitingToast, addSuccessToast] = useToast("item saved");
  const warnToast = useRequiredFieldsToast();

  const service = new CertificationsService();
  const [certifications, setCertifications] = useState(service.getAll());
  const [inputs, setInputs] = useState({
    certification: "",
    organization: "",
    url: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const removeCertification = (certif) => {
    removeWaitingToast();
    service.removeOne(certif);
    setCertifications(service.getAll());
    removeSuccessToast();
  };

  const addCertification = (event) => {
    event.preventDefault();
    if (!inputs.certification.trim() || !inputs.url.trim()) {
      warnToast();
      return;
    }
    addWaitingToast();
    service.addOne({
      name: inputs.certification.trim(),
      organization: inputs.organization.trim(),
      url: inputs.url.trim(),
    });
    setInputs({
      url: "",
      certification: "",
      organization: "",
    });
    setCertifications(service.getAll());
    addSuccessToast();
  };

  return (
    <div className="certifications">
      <div className="certifications-list">
        {certifications.map((certif, index) => (
          <Fragment key={certif.name}>
            <div key={certif.name} className="certification">
              <span>{certif.name}</span>
              <span>{certif.organization}</span>
              <a href={certif.url} target="_blank" rel="noreferrer">
                {certif.url}
              </a>
              <button
                onClick={() => removeCertification(certif)}
                className="remove-btn">
                X
              </button>
            </div>
            {index + 1 < certifications.length && <hr />}
          </Fragment>
        ))}
      </div>
      <form>
        <div className="certifications-input-wrapper">
          <div className="certifications-input">
            <label htmlFor="input-new-certification">
              {capitalize(t("name"))}*
            </label>
            <input
              id="input-new-certification"
              name="certification"
              type="text"
              onChange={handleChange}
              value={inputs.certification}
              required="required"
            />
            <label htmlFor="input-new-certification-level">
              {capitalize(t("organization"))}
            </label>
            <input
              id="input-new-certification-level"
              name="organization"
              type="text"
              onChange={handleChange}
              value={inputs.organization}
            />
            <label htmlFor="input-new-certification-level">URL*</label>
            <input
              id="input-new-certification-level"
              name="url"
              type="URL"
              onChange={handleChange}
              value={inputs.url}
              required="required"
            />
          </div>
          <button onClick={addCertification} className="add-btn">
            {capitalize(t("add"))}
          </button>
        </div>
      </form>
    </div>
  );
}