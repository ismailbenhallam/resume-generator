import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import capitalize from "../utilities/capitalize";

const WAITING_MESSAGE_KEY = "waiting...";

export default function useToast(
  successMessageKey = "success",
  errorMessageKey = "error",
  style
) {
  const { t } = useTranslation();
  let toastId;

  const createWaitingToast = () => {
    toastId = toast.loading(capitalize(t(WAITING_MESSAGE_KEY)));
  };

  const createSuccessToast = () => {
    toast.success(capitalize(t(successMessageKey)), {
      id: toastId,
      style: style,
    });
  };

  const createErrorToast = () => {
    toast.error(capitalize(t(errorMessageKey)), {
      id: toastId,
      style: style,
    });
  };

  return [createWaitingToast, createSuccessToast, createErrorToast];
}
