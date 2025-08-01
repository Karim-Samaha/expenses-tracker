import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addExpenseSchema, type ExpensValue } from "../types/expense.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addExpense } from "../services/AddExpenses";
import Expenses from "../types/Expenses";
import useFormStatus from "@shared/hooks/useFormStatus";
import { Category } from "@features/category/types/Category";
import getUsdAmount from "../services/GetUsdAmount";

const useAddExpensesForm = () => {
  const { formStatus, handleFormSuccess, handleFormCrash } = useFormStatus();
  const [formValues, setFormValues] = useState<Expenses>({
    category: "",
    amount: "",
    date: null,
    file: null,
    categoryIcon: "",
    currency: "EGP",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCategoryChange = (category: Category) => {
    setFormValues((prev) => ({
      ...prev,
      category: category.label,
      categoryIcon: category.icon,
    }));
  };

  const handleDateChange = (date: Date) => {
    const normalizedUTCDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    setFormValues((prev) => ({
      ...prev,
      date: normalizedUTCDate,
    }));
  };
  const handleFileChange = (file: File | null) => {
    setFormValues((prev) => ({
      ...prev,
      file,
    }));
  };
  const {
    register,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<ExpensValue>({
    resolver: zodResolver(addExpenseSchema),
  });
  const handleAddExpense = async () => {
    setValue("category", formValues.category, { shouldValidate: true });
    setValue("amount", formValues.amount, { shouldValidate: true });
    if (formValues.date)
      setValue("date", formValues.date, { shouldValidate: true });
    if (formValues.file)
      setValue("file", formValues.file, { shouldValidate: true });
    const isValid = await trigger();
    if (isValid) {
      try {
        let amountInUsd = await getUsdAmount(
          formValues.currency,
          parseInt(formValues.amount)
        );
        addExpense(
          {
            ...formValues,
            ...amountInUsd,
            orignalAmount: formValues.amount,
            originalCurrency: formValues.currency,
          },
          handleFormSuccess,
          handleFormCrash
        );
      } catch (err) {
        handleFormCrash();
      }
    } else console.log("Validation failed");
  };

  return {
    formValues,
    handleChange,
    handleCategoryChange,
    handleDateChange,
    handleFileChange,
    register,
    errors,
    handleAddExpense,
    formStatus,
  };
};

export default useAddExpensesForm;
