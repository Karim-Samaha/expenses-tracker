import { describe, it, expect } from "vitest";

import Expenses from "../types/Expenses";
import { filterByDate } from "./filterExpensesByDate";

const now = new Date();
const iso = (date: Date) => date.toISOString();

const mockExpenses: Expenses[] = [
  {
    amount: "100",
    date: new Date(now),
    category: "",
    currency: "",
  },
  {
    amount: "200",
    date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 3),
    category: "",
    currency: "",
  },
  {
    amount: "300",
    date: new Date(now.getFullYear(), now.getMonth() - 1, 15),
    category: "",
    currency: "",
  },
  {
    amount: "400",
    date: new Date(now.getFullYear() - 1, 6, 1),
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
      expect.arrayContaining([mockExpenses[0], mockExpenses[1]])
    );
    expect(result).not.toEqual(
      expect.arrayContaining([mockExpenses[2], mockExpenses[3]])
    );
  });

  it("should return expenses from this month for 'MONTH'", () => {
    const result = filterByDate(mockExpenses, "MONTH");
    expect(result).toEqual(
      expect.arrayContaining([mockExpenses[0], mockExpenses[1]])
    );
    expect(result).not.toEqual(
      expect.arrayContaining([mockExpenses[2], mockExpenses[3]])
    );
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
