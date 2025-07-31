import React, { type ReactNode } from "react";
import type { FieldError } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string; // Optional wrapper class
  inputClassName?: string; // Optional input class
  error?: FieldError;
  icon?: ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  className = "",
  inputClassName = "",
  error,
  icon,
  ...inputProps
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block mb-1 text-black font-semibold">{label}</label>
      )}
      <input
        {...inputProps}
        className={`w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none ${inputClassName}`}
      />
      {icon && icon}
      {error && <p className="text-[red] mt-[3px]">{error.message}</p>}
    </div>
  );
};

export default InputField;
