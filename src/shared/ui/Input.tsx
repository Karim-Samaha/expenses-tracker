import React, { type ReactNode } from "react";
import type { FieldError } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string; // Optional wrapper class
  inputClassName?: string; // Optional input class
  error?: FieldError;
  icon?: ReactNode;
  selectOptions?: { label: string; value: string }[];
  selectValue?: string;
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  className = "",
  inputClassName = "",
  error,
  icon,
  selectOptions,
  selectValue,
  onSelectChange,
  ...inputProps
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block mb-1 text-black font-semibold">{label}</label>
      )}
      <div className="flex items-center gap-1">
        {selectOptions && (
          <select
            value={selectValue}
            onChange={onSelectChange}
            className="h-[48px] rounded-lg px-3 bg-gray-100 text-gray-500 focus:outline-none border-none"
            name="currency"
          >
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}

        <input
          {...inputProps}
          className={`flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none ${inputClassName}`}
        />
      </div>
      {/* <input
        {...inputProps}
        className={`w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none ${inputClassName}`}
      /> */}
      {icon && icon}
      {error && <p className="text-[red] mt-[3px]">{error.message}</p>}
    </div>
  );
};

export default InputField;
