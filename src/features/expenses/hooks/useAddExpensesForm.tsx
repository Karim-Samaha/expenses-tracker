import { useState } from "react";
import { useForm } from "react-hook-form";
import { addExpenseSchema, type ExpensValue } from "../types/expense.schema";
import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = {
  category: string;
  amount: string;
  date: Date | null;
  file: File | null;
};
const useAddExpensesForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    category: "",
    amount: "",
    date: null,
    file: null,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCategoryChange = (ctgName: string) => {
    setFormValues((prev) => ({
      ...prev,
      category: ctgName,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormValues((prev) => ({
      ...prev,
      date: date,
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
    handleSubmit,
    formState: { errors },
  } = useForm<ExpensValue>({
    resolver: zodResolver(addExpenseSchema),
  });
  const handleAddExpense = handleSubmit(() => {

    return;
  });
  return {
    formValues,
    handleChange,
    handleCategoryChange,
    handleDateChange,
    handleFileChange,
    register,
    errors,
    handleAddExpense,
  };
};

export default useAddExpensesForm;
