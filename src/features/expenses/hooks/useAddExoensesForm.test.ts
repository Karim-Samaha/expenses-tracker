import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import useAddExpensesForm from "./useAddExpensesForm";
import { addExpense } from "../services/AddExpenses";

vi.mock("../services/AddExpenses", () => ({
  addExpense: vi.fn(),
}));

vi.mock("../services/GetUsdAmount", () => ({
  default: vi.fn().mockResolvedValue({ usdAmount: 100 }),
}));

vi.mock("@shared/hooks/useFormStatus", () => ({
  default: () => ({
    formStatus: "idle",
    handleFormSuccess: vi.fn(),
    handleFormCrash: vi.fn(),
  }),
}));

vi.mock("react-hook-form", async () => {
  const actual = await vi.importActual("react-hook-form");
  return {
    ...actual,
    useForm: () => ({
      register: vi.fn(),
      trigger: vi.fn().mockResolvedValue(true), // ✅ always valid
      setValue: vi.fn(),
      formState: { errors: {} },
    }),
  };
});
describe("useAddExpensesForm", () => {
  it("should call addExpense with USD amount when form is valid", async () => {
    const { result } = renderHook(() => useAddExpensesForm());

    // Fill in the form state
    act(() => {
      result.current.handleChange({
        target: { name: "category", value: "Food" },
      } as any);
      result.current.handleChange({
        target: { name: "amount", value: "200" },
      } as any);
    });

    await act(async () => {
      await result.current.handleAddExpense();
    });

    expect(addExpense).toHaveBeenCalledWith(
      expect.objectContaining({
        category: "Food",
        amount: "200",
        usdAmount: 100,
        orignalAmount: "200",
        originalCurrency: "EGP",
      }),
      expect.any(Function),
      expect.any(Function)
    );
  });
});
