import { useState } from "react";

const categories = [
  { label: "Groceries", icon: "🛒" },
  { label: "Entertainment", icon: "🎟️" },
  { label: "Gas", icon: "⛽" },
  { label: "Shopping", icon: "🛍️" },
  { label: "News Paper", icon: "🗞️" },
  { label: "Transport", icon: "🚗" },
  { label: "Rent", icon: "🏠" },
];
const useCategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Entertainment");
  const handleCategoryChange = (name: string) => {
    setSelectedCategory(name);
  };

  return { categories, selectedCategory, handleCategoryChange };
};
export default useCategorySelection;
