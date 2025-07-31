import useQueryString from "@shared/hooks/useQueryString";
import { useEffect, useState } from "react";
import GetTotalExpensesAmount from "../services/GetTotalExpensesAmount";

const useInsights = () => {
  const [insights, setInsights] = useState({
    totalExpenses: 0,
    totalIncome: 10840,
    totalBalance: 2548,
  });
  const [totalExpenses, setTotalExpenses] = useState(0);

  const { value: filter } = useQueryString("filter");
  const handleTotalExpenses = (filter: string | null) => {
    let totalAmount = GetTotalExpensesAmount(filter);
    setInsights((prev) => ({ ...prev, totalExpenses: totalAmount }));
  };
  useEffect(() => {
    handleTotalExpenses(filter);
  }, [filter]);

  return { ...insights };
};
export default useInsights;
