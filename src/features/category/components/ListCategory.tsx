import React from "react";
import type { Category } from "../types/Category";
import { Plus } from "lucide-react";
import FadeIn from "@shared/ui/FadeIn";

interface ListCategoryProps {
  categories: Category[];
  selectedCategory: string;
  handleCategoryChange: (category: Category) => void;
}
const ListCategory: React.FC<ListCategoryProps> = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-md font-semibold mb-2">Categories</h3>
      <FadeIn>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex flex-col items-center"
              onClick={() => handleCategoryChange(cat)}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${
                  selectedCategory === cat.label
                    ? "bg-blue-600 text-white"
                    : "bg-[#d6dfff]"
                }`}
              >
                {cat.icon}
              </div>
              <span className="text-[.7rem] text-center mt-1 text-black font-semibold">
                {cat.label}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <Plus size={15} />
            </div>
            <span className="text-[.7rem] text-center mt-1">Add Category</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ListCategory;
