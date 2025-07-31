import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Select = ({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 px-3 py-1 rounded-md text-left shadow-sm flex gap-x-2 items-center"
      >
        <span> {selected || options[0]}</span>
        <ChevronDown size={15} />
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
