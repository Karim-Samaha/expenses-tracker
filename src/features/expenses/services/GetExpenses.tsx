
import Expenses from "../types/Expenses";

export function getExpenses(): Expenses[] {
  const data = localStorage.getItem('expenses');
  return data ? JSON.parse(data) : [];
}
