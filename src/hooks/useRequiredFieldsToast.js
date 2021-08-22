import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { TOAST_WARNING_STYLE } from "../constants";
import capitalize from "../utilities/capitalize";

export default function useRequiredFieldsToast() {
  const { t } = useTranslation();

  const createToast = () =>
    toast(
      capitalize(t("please fill in all mandatory fields")),
      TOAST_WARNING_STYLE
    );

  return createToast;
}
