import { describe, it, expect } from "vitest";

import Expenses from "../types/Expenses";
import { filterByDate } from "./filterExpensesByDate";

const now = new Date();
const mockExpenses: Expenses[] = [
  {
    amount: "100",
    date: new Date(now.getTime() - 2 * 60 * 60 * 1000), // today
    category: "",
    currency: "",
  },
  {
    amount: "200",
    date: new Date(now.getFullYear(), now.getMonth(), 5, 12, 0, 0), // this month
    category: "",
    currency: "",
  },
  {
    amount: "300",
    date: new Date("2025-06-15T12:00:00.000Z"), // previous month
    category: "",
    currency: "",
  },
  {
    amount: "400",
    date: new Date("2024-07-01T12:00:00.000Z"), // previous year
    category: "",
    currency: "",
  },
];

describe("filterByDate", () => {
  it("should return all expenses when filter is 'ALL'", () => {
    const result = filterByDate(mockExpenses, "ALL");
    expect(result.length).toBe(mockExpenses.length);
  });

  it("should return expenses within the last 7 days for 'WEEK'", () => {
    const result = filterByDate(mockExpenses, "WEEK");

    expect(result).toEqual(
      expect.arrayContaining([mockExpenses[0]])
    );

  });

  it("should return expenses from this month for 'MONTH'", () => {
    const result = filterByDate(mockExpenses, "MONTH");
    console.log({ result });
    console.log(mockExpenses[1]);
    expect(result).toEqual(expect.arrayContaining([mockExpenses[1]]));
  });

  it("should return expenses from this year for 'YEAR'", () => {
    const result = filterByDate(mockExpenses, "YEAR");
    expect(result).toEqual(
      expect.arrayContaining([
        mockExpenses[0],
        mockExpenses[1],
        mockExpenses[2],
      ])
    );
    expect(result).not.toEqual(expect.arrayContaining([mockExpenses[3]]));
  });

  it("should return all expenses for unknown filter", () => {
    const result = filterByDate(mockExpenses, "UNKNOWN");
    expect(result.length).toBe(mockExpenses.length);
  });
});
