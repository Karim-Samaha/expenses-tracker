import { CalendarDays } from "lucide-react";
import type React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import type { FieldError } from "react-hook-form";

interface DatePickerProps {
  label?: string;
  className?: string;
  inputClassName?: string;
  value?: Date | null;
  onChange: (e: any) => void;
  error?: FieldError;
}

const DatePickerInput: React.FC<DatePickerProps> = ({
  value,
  onChange,
  inputClassName,
  className,
  label,
  error,
  ...inputProps
}) => {
  const datePickerRef = useRef<DatePicker | null>(null);
  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current?.setOpen(true);
    }
  };
  return (
    <div className={className}>
      {label && (
        <label className="block mb-1 text-black font-semibold">{label}</label>
      )}
      <div className="relative w-full bg-gray-100 px-3 rounded-lg">
        <DatePicker
          ref={datePickerRef}
          selected={value}
          onChange={onChange}
          className={`w-full w-full  py-3 rounded-lg text-gray-700 focus:outline-none ${inputClassName}`}
          placeholderText="Enter receipt date"
          {...inputProps}
        />
        <CalendarDays
          className="absolute right-3 top-3"
          onClick={handleIconClick}
        />
      </div>
      {error && <p className="text-[red] mt-[3px]">{error.message}</p>}
    </div>
  );
};
export default DatePickerInput;
