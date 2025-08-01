import Expenses from "../types/Expenses";

const downloadCsv = (data: Expenses[]) => {
  const headers = [
    "Category",
    "Amount",
    "Currency",
    "Date",
    "Original Amount",
    "Original Currency",
  ];
  const rows = data.map((expense) => [
    expense.category,
    expense.amount,
    expense.currency,
    expense.date ? new Date(expense.date).toISOString().split("T")[0] : "",
    expense.orignalAmount || "",
    expense.originalCurrency || "",
  ]);
  const csvContent = [headers, ...rows]
    .map((row) =>
      row.map((item) => `"${String(item).replace(/"/g, '""')}"`).join(",")
    )
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "expenses.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadCsv;
