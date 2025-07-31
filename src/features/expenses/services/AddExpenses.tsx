import Expenses from "../types/Expenses";
import { getExpenses } from "./GetExpenses";

export function addExpense(
  newExpense: Expenses,
  successCb?: () => void,
  crashCb?: () => void
): void {
  try {
    const expenses = getExpenses();
    expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    successCb && successCb();
  } catch (err) {
    console.log(err);
    crashCb && crashCb();
  }
}
