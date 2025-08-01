import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FilterOption from "../types/FilterOption";
const options = [
  { label: "Last 7 Days", value: "WEEK" },
  { label: "This month", value: "MONTH", default: true },
  { label: "This year", value: "YEAR" },
  { label: "All", value: "ALL" },
];
const useMainFilter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<FilterOption | undefined>(
    options.find((option) => option?.default)
  );
  const toggleSelectDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: FilterOption) => {
    setSelected(option);
    setIsOpen(false);
    const params = new URLSearchParams(searchParams);
    params.set("filter", option.value);
    navigate({ search: params.toString() }, { replace: true });
  };
  // Sync with URL param if it changes
  useEffect(() => {
    const filterParam = searchParams.get("filter");
    if (filterParam) {
      const matchedOption = options.find(
        (option) => option.value === filterParam
      );
      if (matchedOption && matchedOption.value !== selected?.value) {
        setSelected(matchedOption);
      }
    }
  }, [searchParams]);

  return { options, isOpen, selected, toggleSelectDropdown, handleSelect };
};
export default useMainFilter;
