import { getExpenses } from "@features/expenses/services/GetExpenses";
import { filterByDate } from "@features/expenses/utils/filterExpensesByDate";
import Default_Filter from "../types/DefaultFilterEnum";

const GetTotalExpensesAmount = (filter: string | null): number => {
  const expensesList = getExpenses();
  let selectedFilter = filter || Default_Filter.VAL;
  const filteredList = filterByDate(expensesList, selectedFilter);
  const totalAmount = filteredList
    .reduce((total: number, expense) => total + +expense.amount, 0)
    .toFixed(2);
  console.log({ filteredList, totalAmount });
  return +totalAmount;
};
export default GetTotalExpensesAmount;
