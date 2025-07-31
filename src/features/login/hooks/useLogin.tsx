import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginSchema, type LoginFormValues } from "../types/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const useLogin = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const handleLoginForm = handleSubmit(() => {
    // e.preventDefault();
    navigate("/dashboard");
  });

  return { formValues, handleChange, register, handleLoginForm, errors };
};
export default useLogin;
