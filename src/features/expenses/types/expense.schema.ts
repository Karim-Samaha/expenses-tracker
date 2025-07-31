import * as z from "zod";

export const addExpenseSchema = z.object({
  category: z.string().min(1, { message: "Category is required" }),
  amount: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid amount"),
  date: z.custom<Date>((val) => val instanceof Date && !isNaN(val.getTime()), {
    message: "Date is required",
  }),
  file: z.instanceof(File, { message: "Receipt file is required" }).nullable(),
});

export type ExpensValue = z.infer<typeof addExpenseSchema>;
