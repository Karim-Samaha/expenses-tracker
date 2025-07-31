import { Camera, CheckCircle } from "lucide-react";
import CategoryDropdown from "@features/category/components/CategoryDropdown";
import ListCategory from "@features/category/components/ListCategory";
import useCategorySelection from "@features/category/hook/useCategorySelection";
import InputField from "@shared/ui/Input";
import DatePickerInput from "@shared/ui/DatePicker";
import UploadFile from "@shared/ui/UploadFile";
import useAddExpensesForm from "../hooks/useAddExpensesForm";
import ModalComponet from "@shared/ui/Modal";
import { Link } from "react-router-dom";
const AddExpensesForm = () => {
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
    formStatus,
  } = useAddExpensesForm();
  return (
    <>
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
      <ModalComponet
        isOpen={formStatus.success}
        isCrashModal={formStatus.crash}
        content={() => (
          <div className="flex flex-col items-center text-center space-y-4">
            <CheckCircle size={48} className="text-green-500" />
            <h2 className="text-xl font-semibold">
              Expenses Added Successfully!
            </h2>
            <div className="flex flex-col gap-3 mt-4 w-full">
              <Link
                to={"/dashboard"}
                onClick={() => null}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                Back Home
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="border border-[gray] text-black py-2 px-4 rounded hover:bg-gray-100"
              >
                Add Another One
              </button>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default AddExpensesForm;
