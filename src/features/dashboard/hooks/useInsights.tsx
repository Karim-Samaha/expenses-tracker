import { useState } from "react";

const useInsights = () => {
  const [insights, setInsights] = useState({
    income: 10840,
    expenses: 0,
    totalBalance: 10840,
  });
};
export default useInsights;
