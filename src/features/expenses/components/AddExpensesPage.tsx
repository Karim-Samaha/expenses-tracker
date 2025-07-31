import { ArrowLeft, Camera } from "lucide-react";
import CategoryDropdown from "@features/category/components/CategoryDropdown";
import ListCategory from "@features/category/components/ListCategory";
import useCategorySelection from "@features/category/hook/useCategorySelection";
import { Link, useLocation } from "react-router-dom";
import InputField from "@shared/ui/Input";
import DatePickerInput from "@shared/ui/DatePicker";
import UploadFile from "@shared/ui/UploadFile";
import useAddExpensesForm from "../hooks/useAddExpensesForm";

export default function AddExpensesPage() {
  const { categories } = useCategorySelection();
  const {
    formValues,
    handleChange,
    handleDateChange,
    handleCategoryChange: handleCategoryFormState,
    handleFileChange,
    register,
    errors,
    handleAddExpense,
  } = useAddExpensesForm();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const prevPage = queryParams.get("source");
  return (
    <div className="min-h-screen font-sans max-w-sm mx-auto p-4">
      <div className="text-lg font-semibold text-center mb-6 mt-4 relative">
        <Link
          to={prevPage || "/dashboard"}
          className="absolute top-[3px] left-[0]"
        >
          <ArrowLeft strokeWidth={1.25} />
        </Link>
        <p>Add Expense</p>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <CategoryDropdown
            categories={categories}
            selectedCategory={formValues.category}
            handleCategoryChange={handleCategoryFormState}
            error={errors.category}
            {...register("category")}
          />
          <InputField
            label="Amount"
            placeholder="$50,000"
            inputClassName="bg-gray-100 rounded-lg p-3 text-gray-500 focus:outline-none border-none h-[48px] focus:none"
            {...register("amount")}
            value={formValues.amount}
            onChange={handleChange}
            error={errors.amount}
          />
          <DatePickerInput
            value={formValues.date || new Date()}
            onChange={handleDateChange}
            label="Date"
            error={errors.date}
          />
          <UploadFile
            label="Attach Receipt"
            placeHolder="Upload image"
            inputClassName="bg-gray-100 rounded-lg p-3 text-gray-500 focus:outline-none border-none h-[48px] focus:none"
            icon={<Camera className="absolute right-3 top-3 text-black" />}
            handleSelect={handleFileChange}
            error={errors.file}
          />
        </div>

        <ListCategory
          categories={categories}
          selectedCategory={formValues.category}
          handleCategoryChange={handleCategoryFormState}
        />

        <button
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-[12px] font-semibold text-md"
          onClick={handleAddExpense}
        >
          Save
        </button>
      </form>
    </div>
  );
}
