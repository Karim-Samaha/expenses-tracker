import { ChevronDown, ChevronUp } from "lucide-react";
import useMainFilter from "../hooks/useMainFilter";

const FilterSelect = ({}: {}) => {
  const { options, isOpen, selected, toggleSelectDropdown, handleSelect } =
    useMainFilter();
  return (
    <div className="relative">
      <button
        onClick={toggleSelectDropdown}
        className="w-full bg-white border border-gray-300 px-3 py-1 rounded-md text-left shadow-sm flex justify-between items-center min-w-[128px]"
      >
        <span> {selected?.label}</span>
        {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSelect;
