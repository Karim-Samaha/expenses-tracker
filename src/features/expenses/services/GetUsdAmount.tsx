import Expenses from "../types/Expenses";

const getUsdAmount = async (
  currency: string,
  amount: number
): Promise<{ amount: string; currency: string } | void> => {
  try {
    const result = await fetch("https://open.er-api.com/v6/latest/USD");
    const { rates } = await result.json();
    const rate = rates[currency];
    return {
      amount: (amount / rate).toFixed(2),
      currency: "USD",
    };
  } catch (err) {
  }
};
export default getUsdAmount;
