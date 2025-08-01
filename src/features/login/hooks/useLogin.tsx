import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginSchema, type LoginFormValues } from "../types/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@shared/context/AuthContext";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Sync RHF with local state to avoid validation on stale input during fast submission || using keyboard for submission
    setValue(name as keyof LoginFormValues, value);
  };

  const handleLoginForm = handleSubmit(() => {
    login(formValues);
    navigate("/");
  });

  return { formValues, handleChange, register, handleLoginForm, errors };
};
export default useLogin;
