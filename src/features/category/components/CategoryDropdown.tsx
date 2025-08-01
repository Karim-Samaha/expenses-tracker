import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import type { Category } from "../types/Category";
import type { FieldError } from "react-hook-form";

interface CategoryDropdownProps {
  categories: Category[];
  selectedCategory: string;
  handleCategoryChange: (category: Category) => void;
  error?: FieldError;
}
const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  categories,
  selectedCategory,
  handleCategoryChange,
  error,
  ...inputProps
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category: Category) => {
    handleCategoryChange(category);
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <label className="block mb-1 text-black font-semibold">Categories</label>
      <div className="relative">
        <button
          type="button"
          className={`w-full bg-gray-100  rounded-lg p-3 pr-10 text-left focus:outline-none ${
            selectedCategory ? "text-black" : "text-gray-400"
          }`}
          onClick={toggleDropdown}
        >
          {selectedCategory || "Select a category"}
          {isOpen ? (
            <ChevronUp className="absolute right-3 top-3 pointer-events-none" />
          ) : (
            <ChevronDown className="absolute right-3 top-3 pointer-events-none" />
          )}
        </button>
        {error && <p className="text-[red] mt-[3px]">{error.message}</p>}

        {isOpen && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
            {categories.map((cat) => (
              <li
                key={cat.label}
                onClick={() => handleSelect(cat)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 flex gap-x-3"
              >
                <span>{cat.icon}</span>
                <span> {cat.label}</span>
              </li>
            ))}
          </ul>
        )}
        <input
          readOnly
          type="hidden"
          value={selectedCategory}
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default CategoryDropdown;
