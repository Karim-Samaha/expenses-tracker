import AddExpensesForm from "./AddExpensesForm";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("AddExpensesFormUI", () => {
  it("shows validation messages", async () => {
    render(<AddExpensesForm />);
    fireEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(screen.getByText("Category is required")).toBeInTheDocument();
      expect(screen.getByText("Invalid amount")).toBeInTheDocument();
      expect(screen.getByText("Date is required")).toBeInTheDocument();
      expect(screen.getByText("Receipt file is required")).toBeInTheDocument();
    });
  });
});
