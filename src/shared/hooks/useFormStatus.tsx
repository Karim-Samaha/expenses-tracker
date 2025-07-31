import { useState } from "react";
import { success } from "zod";

const useFormStatus = () => {
  const [formStatus, setFormStatus] = useState({
    success: false,
    crash: false,
  });
  const handleFormSuccess = () => {
    setFormStatus((prev) => ({ ...prev, success: true }));
  };
  const handleFormCrash = () => {
    setFormStatus((prev) => ({ ...prev, crash: true }));
  };
  return { formStatus, handleFormSuccess, handleFormCrash };
};
export default useFormStatus;
