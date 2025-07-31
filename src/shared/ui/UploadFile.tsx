import { icons } from "lucide-react";
import React, { useRef, useState, type ReactNode } from "react";
import type { FieldError } from "react-hook-form";

interface UploadFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeHolder?: string;
  className?: string; // Optional wrapper class
  inputClassName?: string; // Optional input class
  handleSelect: (file: File) => void;
  icon?: ReactNode;
  error?: FieldError;
}
const UploadFile: React.FC<UploadFileProps> = ({
  label,
  placeHolder,
  icon,
  inputClassName,
  handleSelect,
  error,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      handleSelect(file);
    }
  };

  return (
    <div>
      {label && (
        <label className="block mb-1 text-black font-semibold">{label}</label>
      )}
      <div
        className={`relative flex items-center w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none ${inputClassName}`}
        onClick={handleClick}
      >
        <span>{fileName || placeHolder || "Upload File"}</span>
        {icon && icon}
      </div>
      {error && <p className="text-[red] mt-[3px]">{error.message}</p>}
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
        {...inputProps}
      />
    </div>
  );
};
export default UploadFile;
