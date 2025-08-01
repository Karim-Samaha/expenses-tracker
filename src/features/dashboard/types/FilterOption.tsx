export interface FilterOption {
  value: string;
  label: string;
  default?: boolean;
}
export const options: FilterOption[] = [
  { label: "Last 7 days", value: "WEEK" },
  { label: "This month", value: "MONTH", default: true },
  { label: "This year", value: "YEAR" },
  { label: "All", value: "ALL" },
];
