import Expenses from "../types/Expenses";

export const filterByDate = (
  expenses: Expenses[],
  filterOption: string
): Expenses[] => {
  if (!filterOption || filterOption.toUpperCase() === "ALL") return expenses;

  const now = new Date();
  let start: Date;
  let end: Date;

  switch (filterOption.toUpperCase()) {
    case "WEEK":
      // Start: 7 days ago from now
      start = new Date(now);
      start.setDate(now.getDate() - 7);

      // End: end of today (23:59:59.999)
      end = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          23,
          59,
          59,
          999
        )
      );
      break;
    case "MONTH":
      start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
      end = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth() + 1,
          0,
          23,
          59,
          59,
          999
        )
      );
      break;

    case "YEAR":
      start = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
      end = new Date(Date.UTC(now.getUTCFullYear(), 11, 31, 23, 59, 59, 999));
      break;

    default:
      return expenses;
  }

  return expenses.filter((expense) => {
    const expenseTime = new Date(expense?.date || "").getTime();
    const startTime = start.getTime();
    const endTime = end.getTime();
    return expenseTime >= startTime && expenseTime <= endTime;
  });
};
